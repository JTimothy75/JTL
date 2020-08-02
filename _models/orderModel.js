const mongoose = require('mongoose');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema(
  {
    product: [
      {
        productID: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
          required: [true, 'Order must belong to a product!']
        },
        name: String,
        colour: String,
        price: Number,
        quantity: Number,
        status: {
          type: String,
          default: 'Not processed',
          enum: [
            'Not processed',
            'Processing',
            'Shipped',
            'Delivered',
            'Cancelled'
          ]
        },
        customerStatus: {
          type: String,
          default: 'waiting for order',
          enum: [
            'Received',
            'Not Delivered',
            'Order is damage',
            'Order not as discribe',
            'waiting for order'
          ]
        }
      }
    ],
    orderId: {
      type: String,
      required: [true, 'Order must have a shiping address.']
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Order must belong to a User!']
    },
    amount: {
      type: Number,
      required: [true, 'Order must have a price.']
    },
    calAmount: {
      type: Number
      // required: [true, 'Order must have a price.']
    },
    shippingAddress: {
      type: String,
      required: [true, 'Order must have a shiping address.']
    },

    deliveryName: {
      type: String,
      required: [true, 'Order must have a shiping address.']
    },
    contactNumber: {
      type: Number,
      required: [true, 'Order must have a price.']
    },
    paid: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: 'Not processed',
      enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
    }
  },
  {
    timestamps: true
  }
);

orderSchema.pre('save', function(next) {
  this.calAmount = this.product.reduce((preVal, curVal) => {
    return curVal.price * curVal.quantity + preVal;
  }, 0);

  next();
});

orderSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'product.productID',
    select: 'name'
  });
  next();
});

orderSchema.post('save', async function() {
  const productId = this.product.map(el => el.productID);
  const prod = await Product.find({ _id: { $in: productId } });

  this.product.forEach(orderEl => {
    prod.forEach(queryEl => {
      if (queryEl.id.toString() === orderEl.productID.toString()) {
        const i = queryEl.colour.findIndex(el => el.colour === orderEl.colour);
        queryEl.sales += +orderEl.quantity;
        queryEl.quantity -= +orderEl.quantity;
        queryEl.colour[i].quantity -= +orderEl.quantity;
      }
    });
  });

  prod.forEach(el => el.save());
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
