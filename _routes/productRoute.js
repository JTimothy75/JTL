const express = require('express');
const productController = require('../_controllers/productController');
const authController = require('../_controllers/authController');

const router = express.Router();
router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    productController.getAllProducts
  )
  .post(productController.createProduct);
router
  .route('/id/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
