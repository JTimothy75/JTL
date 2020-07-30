const Review = require('../_models/reviewModel');
const Order = require('../_models/orderModel');

// const catchAsync = require('../_utilities/catchAsync');
// const AppError = require('../_utilities/appError');
// const APIFeatures = require('../_utilities/apiFeatures');
const factory = require('./handlerFactory');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');

exports.setProductUserIds = (req, res, next) => {
  // Allow nested route
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;

  next();
};

// let productReviewQuery = {};

exports.setProductReviewQuery = (req, res, next) => {
  if (req.params.productId) {
    req.specialQuery = { product: req.params.productId };
  }
  // console.log('called');
  next();
};

exports.productInUserOrder = catchAsync(async (req, res, next) => {
  const order = await Order.findOne({
    user: req.user.id,
    'product.productID': req.params.productId
  });

  if (!order) {
    return next(
      new AppError('Your can only review product that you have bought', 403)
    );
  }

  next();
});

exports.reviewBelongToUser = catchAsync(async (req, res, next) => {
  const review = await Review.findOne({
    _id: req.params.id,
    user: req.user.id
  });

  if (!review) {
    return next(new AppError('Your can only edit review you created', 403));
  }

  // console.log('Good Review');

  next();
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
