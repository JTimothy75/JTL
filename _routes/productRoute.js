const express = require('express');

const productController = require('../_controllers/productController');
const reviewRouter = require('../_routes/reviewRoute');
const authController = require('../_controllers/authController');

const router = express.Router();

router.get('/product-stats', productController.getProductStats);
router.get(
  '/related/:productID',
  productController.setRelatedProductQuery,
  productController.getRelatedProduct
);

router.get(
  // '/search/:searchString',
  '/search',
  productController.setSearchQuery,
  productController.getSearchedProduct
);

router
  .route('/')
  .get(
    productController.setNonZeroQtyProductQuery,
    productController.getAllProducts
  )
  .post(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    productController.uploadProductImages,
    productController.createProduct
  );
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    productController.uploadProductImages,
    productController.updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('root_admin', 'admin', 'product_manager'),
    productController.deleteProduct
  );

router.use('/:productId/reviews', reviewRouter);

router.use(
  authController.protect,
  authController.restrictTo('root_admin', 'admin', 'product_manager')
);
router.post(
  '/:parentId/colour',
  productController.uploadProductImages,
  productController.addProductColour
);
router
  .route('/:parentId/colour/:id')
  .patch(productController.updateProductColour)
  .delete(productController.removingProductColour);

module.exports = router;
