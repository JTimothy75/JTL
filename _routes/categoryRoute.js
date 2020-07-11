const express = require('express');
const categoryController = require('./../_controllers/categoryController');
const authController = require('./../_controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategorys)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    categoryController.createCategory
  );

router
  .route('/id/:id')
  .get(categoryController.getAllCategorys)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    categoryController.updateCategory
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    categoryController.deleteCategory
  );

module.exports = router;
