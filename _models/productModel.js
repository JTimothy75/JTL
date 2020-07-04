const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please tell us the product name'],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      require: [true, 'Please describe the product']
    },
    price: {
      type: Number,
      require: [true, 'Please tell us the price of the product']
    },
    tag: {
      type: String,
      trim: true
    },
    quantity: {
      type: Number,
      require: [true, 'Please tell us the quantity of the product'],
      trim: true
    },
    photo: {
      type: String,
      require: [true, 'Please upload an image of the product'],
      trim: true
    },
    shipping: {
      default: false,
      type: Boolean
    }
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);

module.exports = Product;
