const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Cart item must belong to a Tour!']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Order must belong to a User!']
    },
    name: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Cart item must belong to a name']
    },
    price: {
      type: Number,
      required: [true, 'Cart item must have count.']
    }
  },
  {
    timestamps: true
  }
);

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
