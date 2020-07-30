const express = require('express');

const authController = require('../_controllers/authController');
const orderController = require('../_controllers/orderController');

const router = express.Router();

router.use(authController.protect);
router.post('/checkout-session', orderController.getCheckoutSession);

router.use(authController.restrictTo('admin', 'product_manager'));
router
  .route('/')
  .post(orderController.createOrder)
  .get(orderController.getAllOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
