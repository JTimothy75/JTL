const express = require('express');
const authController = require('../_controllers/authController');
const userController = require('../_controllers/userController');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.use(authController.restrictTo('root_admin', 'admin'));

router.route('/').get(userController.adminOnly, userController.getAllAdmin);
router
  .route('/:id')
  .get(userController.getAdmin)
  .patch(userController.updateAdmin)
  .delete(userController.deleteAdmin);

module.exports = router;
