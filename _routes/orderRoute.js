const express = require('express');

const authController = require('../_controllers/authController');
const orderController = require('../_controllers/orderController');

const router = express.Router();

router.use(authController.protect);
router.post('/checkout-session', orderController.getCheckoutSession);

router.patch(
  '/:orderId/customer-status/:itemId',
  orderController.updateOrderCustomerStatus
);

router.use(authController.restrictTo('root_admin', 'admin', 'product_manager'));
router
  .route('/')
  .post(orderController.createOrder)
  .get(orderController.getAllOrder);

router
  .route('/:id')
  .get(orderController.getOrder)
  .delete(orderController.deleteOrder);

router
  .route('/:orderId/item/:itemId')
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrderItem);

module.exports = router;
