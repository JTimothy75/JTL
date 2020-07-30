const express = require('express');

const authController = require('../_controllers/authController');
const reviewController = require('../_controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);
router
  .route('/')
  .post(
    authController.restrictTo('user'),
    reviewController.setProductUserIds,
    reviewController.productInUserOrder,
    reviewController.createReview
  )
  .get(reviewController.setProductReviewQuery, reviewController.getAllReviews);

router
  .route('/:id')
  .patch(
    authController.restrictTo('user'),
    reviewController.reviewBelongToUser,
    reviewController.updateReview
  )
  .get(reviewController.getReview)
  .delete(authController.restrictTo('admin'), reviewController.deleteReview);

module.exports = router;
