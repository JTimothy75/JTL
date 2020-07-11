const multer = require('multer');
const sharp = require('sharp');
const crypto = require('crypto');

const Product = require('../_models/productModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const { Promise } = require('mongoose');

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '_public/img/products');
//   },

//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     const randomCode = crypto.randomBytes(16).toString('hex');
//     cb(null, `product-${randomCode}-${Date.now()}.${ext}`);
//   }
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

// exports.resizeProductImages = (req, res, next) => {
//   if (!req.file) return next();

//   const randomCode = crypto.randomBytes(16).toString('hex');
//   req.file.filename = `product-${randomCode}-${Date.now()}.jpeg`;
//   console.log(req.file.filename);

//   sharp(req.file.buffer)
//     .resize(1500, 1500, {
//       fit: 'contain',
//       background: { r: 255, g: 255, b: 255, alpha: 1 }
//     })
//     .toFormat('jpeg')
//     .jpeg({ quality: 90 })
//     .toFile(`_public/img/products/${req.file.filename}`);

//   next();
// };

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  if (!req.files) return next();

  const randomCode = crypto.randomBytes(16).toString('hex');
  req.body.imageCover = `product-${randomCode}-${Date.now()}-cover.jpeg`;
  req.body.images = [req.body.imageCover];

  await sharp(req.files.imageCover[0].buffer)
    .resize(1500, 1500, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`_public/img/products/${req.body.imageCover}`);

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${randomCode}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(1500, 1500, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`_public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );
  next();
});

exports.uploadProductImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 7 }
]);

exports.createProduct = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }

  const product = await Product.create(req.body);
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      product
    }
  });
});

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products
    }
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(
      new AppError(`There is no product with this id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      product
    }
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedProduct) {
    return next(
      new AppError(`There is no product with this id: ${req.params.id}`, 404)
    );
  }
  //   console.log(req.body);
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      product: updatedProduct
    }
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);

  if (!deletedProduct) {
    return next(
      new AppError(`There is no product with this id: ${req.params.id}`, 404)
    );
  }

  console.log(deletedProduct);

  res.status(201).json({
    status: 'success',
    message: 'Product has been deleted'
  });
});
