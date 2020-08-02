const multer = require('multer');
const sharp = require('sharp');

const User = require('./../_models/userModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');
const Order = require('../_models/orderModel');

const multerStorage = multer.memoryStorage();

exports.excludeAdmin = catchAsync(async (req, res, next) => {
  req.specialQuery = { role: { $regex: 'user', $options: 'i' } };

  next();
});

exports.adminOnly = catchAsync(async (req, res, next) => {
  req.specialQuery = { role: { $regex: 'admin|manager', $options: 'i' } };

  next();
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user._id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  //
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password update, Please use /updateMyPassword',
        400
      )
    );
  }

  const filteredBody = filterObj(
    req.body,
    'name',
    'email',
    'photo',
    'gender',
    'interest',
    'tel'
  );
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    results: updatedUser.length,
    data: {
      updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  //
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(201).json({
    status: 'success',
    message: 'user account has been deleted'
  });
});

exports.getMyOrder = catchAsync(async (req, res, next) => {
  // Find all bookings
  const orders = await Order.find({ user: req.user._id });

  res.status(200).json({
    status: 'success',
    results: orders.length,
    data: {
      order: orders
    }
  });
});

exports.addCart = factory.createSubOne(User, 'cart');
exports.removingCart = factory.deleteSubOne(User, 'cart');

exports.addContactAddress = factory.createSubOne(User, 'contactAddress');
exports.updateContactAddress = factory.updateSubOne(User, 'contactAddress');
exports.removingContactAddress = factory.deleteSubOne(User, 'contactAddress');

exports.getAllUser = factory.getAll(User);

exports.getUser = catchAsync(async (req, res, next) => {
  const doc = await User.findOne({
    _id: req.params.id,
    role: { $regex: 'user', $options: 'i' }
  });

  if (!doc) {
    return next(
      new AppError(`There is no user with this id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  let doc = await User.findById(req.params.id);

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (!(doc.role === 'user')) {
    return next(
      new AppError(`Use the update admin route to update admin`, 403)
    );
  }
  await doc.updateOne(req.body);
  doc = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (!(doc.role === 'user')) {
    return next(
      new AppError(`Use the delete admin route to delete admin`, 403)
    );
  }
  await doc.deleteOne();

  res.status(204).json({
    status: 'success',
    message: 'Document has been deleted'
  });
});

exports.getAllAdmin = factory.getAll(User);
exports.getAdmin = catchAsync(async (req, res, next) => {
  const doc = await User.findOne({
    _id: req.params.id,
    role: { $regex: 'admin|manager', $options: 'i' }
  });

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.getAdmin = catchAsync(async (req, res, next) => {
  const doc = await User.findOne({
    _id: req.params.id,
    role: { $regex: 'admin|manager', $options: 'i' }
  });

  if (!doc) {
    return next(
      new AppError(
        `There is no admin or manager with this id: ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});
exports.updateAdmin = catchAsync(async (req, res, next) => {
  let doc = await User.findById(req.params.id);

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (doc.role === 'user') {
    return next(new AppError(`Use the delete user route to delete user`, 403));
  }
  if (!(req.user.role === 'root_admin') && doc.role === 'root_admin') {
    return next(new AppError(`ROOT_ADMIN resources! Access denied`, 403));
  }

  await doc.updateOne(req.body);
  doc = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.deleteAdmin = catchAsync(async (req, res, next) => {
  const doc = await User.findById(req.params.id);

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (doc.role === 'user') {
    return next(new AppError(`Use the delete user route to delete user`, 404));
  }

  if (!(req.user.role === 'root_admin') && doc.role === 'root_admin') {
    return next(new AppError(`ROOT_ADMIN resources! Access denied`, 403));
  }

  await doc.deleteOne();

  res.status(204).json({
    status: 'success',
    message: 'Document has been deleted'
  });
});
