const multer = require('multer');
const sharp = require('sharp');

const User = require('./../_models/userModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');
const Order = require('../_models/orderModel');
const Product = require('../_models/productModel');

const multerStorage = multer.memoryStorage();

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

  // Find products with the returned IDs
  const productIDs = orders.map(el => el.product);
  const products = await Product.find({ _id: { $in: productIDs } });

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      order: products
    }
  });
});

exports.addCart = factory.createSubOne(User, 'cart');
exports.removingCart = factory.deleteSubOne(User, 'cart');

exports.addContactAddress = factory.createSubOne(User, 'contactAddress');
exports.updateContactAddress = factory.updateSubOne(User, 'contactAddress');
exports.removingContactAddress = factory.deleteSubOne(User, 'contactAddress');

exports.getAllUser = factory.getAll(User);
exports.getUser = factory.getOne(User);
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);
