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
    req.body.items.forEach(orderItemsEl => {
      if (orderItemsEl.productId.toString() === el._id.toString()) {
        if (
          !el.colour.some(
            matchedEl =>
              matchedEl.colour.toLowerCase() ===
              orderItemsEl.colour.toLowerCase()
          )
        ) {
          return next(
            new AppError(
              `Please pick another colour, of ${
                el.name
              }, ${orderItemsEl.colour.toLowerCase()} is out of stock`,
              404
            )
          );
        }

        const icolour = el.colour.findIndex(
          colourEl =>
            colourEl.colour.toLowerCase() === orderItemsEl.colour.toLowerCase()
        );

        if (el.colour[icolour].quantity < orderItemsEl.quantity) {
          return next(
            new AppError(
              `Your have ordered more than the available quantity of ${orderItemsEl.colour.toLowerCase()} ${
                el.name
              }, Please reduce your order to be less than or equal ${
                el.colour[icolour].quantity
              }`,
              404
            )
          );
        }

        col = orderItemsEl.colour.toLowerCase();
        qty = orderItemsEl.quantity;

        lineItems.push({
          name: el.name,
          description: el.summary,
          images: [
            `${req.protocol}://${req.get('host')}/img/products/${el.imageCover}`
          ],
          amount: (el.colour[icolour].discountPrice * 100).toFixed(0),
          currency: 'usd',
          quantity: qty
        });
        prod.push({
          productID: el.id,
          name: el.name,
          colour: col,
          price: el.colour[icolour].discountPrice,
          quantity: qty
        });

        console.log(lineItems, el.colour[icolour].discountPrice * 100, icolour);
      }
    });
  });

  // Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    success_url: `${req.protocol}://${req.get('host')}`,

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

const createOrderCheckout = async session => {
  const {
    orderId,
    user,
    deliveryName,
    contactNumber,
    shippingAddress
  } = session.metadata;

  const amount = session.amount_total / 100;
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

exports.updateOrderCustomerStatus = catchAsync(async (req, res, next) => {
  const doc = await Order.findById({ _id: req.params.orderId });
  const SubDoc = doc.product.id(req.params.itemId);
  if (!SubDoc) {
    return next(
      new AppError(`There is no item with this id: ${req.params.id}`, 404)
    );
  }

  SubDoc.customerStatus = req.body.customerStatus;

  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.updateOrder = catchAsync(async (req, res, next) => {
  const doc = await Order.findById({ _id: req.params.orderId });
  const SubDoc = doc.product.id(req.params.itemId);
  if (!SubDoc) {
    return next(
      new AppError(`There is no item with this id: ${req.params.id}`, 404)
    );
  }

  SubDoc.status = req.body.status;

  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.deleteOrderItem = catchAsync(async (req, res, next) => {
  const doc = await Order.findById({ _id: req.params.orderId });
  const SubDoc = doc.product.id(req.params.itemId);

  if (!SubDoc) {
    return next(
      new AppError(`There is no item with this id: ${req.params.id}`, 404)
    );
  }

  doc.product.id(req.params.id).remove();
  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.createOrder = factory.createOne(Order);
exports.getAllOrder = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.deleteOrder = factory.deleteOne(Order);
