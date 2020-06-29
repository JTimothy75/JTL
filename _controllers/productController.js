const Product = require("../_models/productModel");

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    results: 1,
    data: {
      products: {
        name: "Zola Plantinium Royal Bag",
        Size: 13,
        price: "$67.59",
      },
    },
  });
};

exports.getProduct = (req, res) => {
  res.status(200).json({
    status: "success",
    results: 1,
    data: {
      products: {
        name: "Zola Plantinium Royal Bag",
        Size: 13,
        price: "$67.59",
        productId: req.params.id,
      },
    },
  });
};

exports.createProduct = (req, res) => {
  //   console.log(req.body);
  res.status(200).json({
    status: "success",
    results: 1,
    data: req.body,
  });
};
