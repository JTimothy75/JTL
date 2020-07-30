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

router.patch('/updateMyPassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete('/deleteMe', userController.deleteMe);

router.use(authController.restrictTo('admin'));
router.route('/').get(userController.getAllUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
