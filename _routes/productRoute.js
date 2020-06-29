const express = require("express");
const productController = require("../_controllers/productController");

const router = express.Router();
router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);
router.route("/id/:id").get(productController.getProduct);

module.exports = router;
