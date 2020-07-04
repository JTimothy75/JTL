const Product = require('../_models/productModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');

exports.createProduct = catchAsync(async (req, res, next) => {
  const products = await Product.create(req.body);
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      products
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
