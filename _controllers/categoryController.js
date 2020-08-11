const multer = require('multer');
const sharp = require('sharp');

const Category = require('../_models/categoryModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');
const awsUpload = require('../_utilities/awsManager');

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

exports.uploadImage = upload.single('image');

const resizeProductImages = async (file, categoryId) => {
  const imageName = `category-${categoryId}-${Date.now()}.jpeg`;

  const categoryImage = await sharp(file)
    .resize(150, 150, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toBuffer();

  awsUpload(categoryImage, `categories/${imageName}`);

  return imageName;
};

exports.createCategory = catchAsync(async (req, res, next) => {
  if (!req.file)
    return next(new AppError('Upload an image for this category', 400));

  const doc = await Category.create(req.body);

  const imageUpload = await resizeProductImages(req.file.buffer, doc._id);

  if (!imageUpload) {
    await Category.findByIdAndDelete({ _id: doc._id });
    return next(new AppError('Upload an image for this category', 400));
  }

  doc.image = imageUpload;
  await doc.save();

  res.status(201).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const document = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!document) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (req.file) {
    const imageUpload = await resizeProductImages(
      req.file.buffer,
      req.params.id
    );
    document.image = imageUpload;
    await document.save();
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: document
    }
  });
});

exports.getAllCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
