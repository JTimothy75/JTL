const express = require('express');
const categoryController = require('./../_controllers/categoryController');
const authController = require('./../_controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    categoryController.uploadImage,
    categoryController.createCategory
  );

router
  .route('/:id')
  .get(categoryController.getCategory)
  .patch(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    categoryController.uploadImage,
    categoryController.updateCategory
  )
  .delete(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    categoryController.deleteCategory
  );

module.exports = router;
