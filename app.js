const express = require('express');
const morgan = require('morgan');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');

const userRouter = require('./_routes/userRoute');
const categoryRouter = require('./_routes/categoryRoute');
const productRouter = require('./_routes/productRoute');
const reviewRouter = require('./_routes/reviewRoute');
const orderRouter = require('./_routes/orderRoute');
const orderController = require('./_controllers/orderController');
const errorController = require('./_controllers/errorController');
const AppError = require('./_utilities/appError');

const app = express();
app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

// Global Middlewares
// Set security HTTP headers
app.use(helmet());

// Limit request from same api
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});

app.use('/api', limiter);

// Body parser, reading data from the body into req.body
app.use(
  express.json({
    limit: '10kb'
  })
);

// Cookie parser, reading data from the body into req.body
app.use(cookieParser());

// Sanitizing data against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['price', 'ratingsQuantity', 'ratingsAverage']
  })
);

// Serving static file
app.use(express.static(path.join(__dirname, '_public')));
app.use(morgan('dev'));

app.use(compression());

// Routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/order', orderRouter);

app.get('/', orderController.createOrderCheckout, (req, res) => {
  // console.log(req.cookies);

  res.cookie('JTL', 'worthyAndReliable_passionAndLove', {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  res.status(200).json({
    status: 'success',
    data: {
      welcome: 'Welcome to JTL Accessories'
    }
  });
});

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can not find any route that matches ${req.originalUrl} `)
  );
});

app.use(errorController);

module.exports = app;
