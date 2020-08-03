const express = require('express');
const authController = require('../_controllers/authController');
const userController = require('../_controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.get('/confirmEmail/:token', authController.confirmEmail);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.post('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

// Adding, Editing and Deleting User Address
router.post('/address', userController.addContactAddress);
router
  .route('/address/:id')
  .patch(userController.updateContactAddress)
  .delete(userController.removingContactAddress);

// Adding,and Deleting User CartItems
router.post('/cart', userController.addCart);
router.route('/cart/:id').delete(userController.removingCart);

// Adding,and Deleting User wish List
router.post('/wish-list', userController.addWishList);
router.route('/wish-list/:id').delete(userController.removingWishList);

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.get('/order/', userController.getMyOrder);
router.delete('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('root_admin', 'admin'));
router.route('/').get(userController.excludeAdmin, userController.getAllUser);

router
  .route('/:id')
  .get(userController.excludeAdmin, userController.getUser)
  .patch(userController.excludeAdmin, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
