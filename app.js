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

const adminRouter = require('./_routes/adminRoute');
const userRouter = require('./_routes/userRoute');
const categoryRouter = require('./_routes/categoryRoute');
const productRouter = require('./_routes/productRoute');
const reviewRouter = require('./_routes/reviewRoute');
const orderRouter = require('./_routes/orderRoute');
const orderController = require('./_controllers/orderController');
const errorController = require('./_controllers/errorController');

const app = express();
app.enable('trust proxy');
// app.use(cors());
app.use(
  cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:5500'],
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
    exposedHeaders: 'Content-Range,X-Content-Range'
  })
);

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

app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json' }),
  orderController.webhookCheckout
);
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
app.use(express.static(path.join(__dirname, 'dist/zola-scss')));
app.use(express.static(path.join(__dirname, '_public')));
app.use(morgan('dev'));

app.use(compression());

// Routers
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/review', reviewRouter);
app.use('/api/v1/order', orderRouter);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/zola-scss/index.html'));
});

app.use(errorController);

module.exports = app;
