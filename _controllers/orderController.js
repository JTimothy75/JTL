const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const crypto = require('crypto');

const Product = require('../_models/productModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');
const Order = require('../_models/orderModel');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  const productIds = req.body.items.map(el => el.productId);
  // Get the currently bought productS
  const products = await Product.find({ _id: { $in: productIds } });
  const prod = [];
  const lineItems = [];
  products.forEach(el => {
    let col;
    let qty;
    req.body.items.forEach(el2 => {
      if (el2.productId.toString() === el._id.toString()) {
        col = el2.colour;
        qty = el2.quantity;
      }
    });

    lineItems.push({
      name: el.name,
      description: el.summary,
      images: [
        `${req.protocol}://${req.get('host')}/img/products/${el.imageCover}`
      ],
      amount: el.price * 100 - el.priceDiscount,
      currency: 'usd',
      quantity: qty
    });
    prod.push({
      productID: el.id,
      name: el.name,
      colour: col,
      price: el.price - el.priceDiscount,
      quantity: qty
    });
  });

  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}`,
    // success_url: `${req.protocol}://${req.get(
    //   'host'
    // )}/?product=${JSON.stringify(prod)}&user=${
    //   req.user.id
    // }&orderId=${crypto.randomBytes(8).toString('hex')}&deliveryName=${
    //   req.body.deliveryName
    // }&contactNumber=${req.body.contactNumber}&shippingAddress=${
    //   req.body.shippingAddress
    // }`,
    cancel_url: `${req.protocol}://${req.get('host')}/api/v1/product/`,
    customer_email: req.user.email,
    client_reference_id: req.user.id,
    metadata: {
      product: JSON.stringify(prod),
      user: req.user.id,
      orderId: crypto.randomBytes(8).toString('hex'),
      deliveryName: req.body.deliveryName,
      contactNumber: req.body.contactNumber,
      shippingAddress: req.body.shippingAddress
    },
    line_items: lineItems
  });

  // Create session as responce
  res.status(200).json({
    status: 'success',
    session
  });
});

// exports.createOrderCheckout = catchAsync(async (req, res, next) => {
//   const {
//     orderId,
//     user,
//     deliveryName,
//     contactNumber,
//     shippingAddress
//   } = req.query;

//   let { product } = req.query;
//   if (
//     !orderId &&
//     !product &&
//     !user &&
//     !deliveryName &&
//     !contactNumber &&
//     !shippingAddress
//   ) {
//     // res.json({ message: 'Payment failed' });
//     return next();
//   }

//   product = JSON.parse(product);

//   await Order.create({
//     orderId,
//     product,
//     user,
//     deliveryName,
//     contactNumber,
//     shippingAddress
//   });

//   res.redirect(`${req.protocol}://${req.get('host')}/`);
// });

const createOrderCheckout = async session => {
  const {
    orderId,
    user,
    deliveryName,
    contactNumber,
    shippingAddress
  } = session.metadata;

  const amount = session.amount_total;
  let { product } = session.metadata;
  product = JSON.parse(product);

  await Order.create({
    orderId,
    amount,
    product,
    user,
    deliveryName,
    contactNumber,
    shippingAddress
  });
  //
};

exports.webhookCheckout = (req, res, next) => {
  //
  const signature = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    createOrderCheckout(event.data.object);
  }

  res.status(200).json({
    received: true
  });
};

exports.createOrder = factory.createOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.getAllOrder = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
