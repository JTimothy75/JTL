const express = require('express');
const morgan = require('morgan');

const userRouter = require('./_routes/userRoute');
const categoryRouter = require('./_routes/categoryRoute');
const productRouter = require('./_routes/productRoute');

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Routers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      welcome: 'Welcome to JTL Accessories'
    }
  });
});

module.exports = app;
