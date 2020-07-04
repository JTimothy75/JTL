// const bcrypt = require('bcrypt');
// const chalk = require('chalk');
const util = require('util');
const jwt = require('jsonwebtoken');

const AppError = require('../_utilities/appError');
const catchAsync = require('./../_utilities/catchAsync');
const User = require('../_models/userModel');

const createToken = userId => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const token = createToken(newUser._id);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      User: newUser
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError('Enter an email and a password', 401));
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError('You entered a wrong email or password', 401));
  }
  const token = createToken(user._id);

  res.status(201).json({
    status: 'success',
    token
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer')
  )
    return next(
      new AppError('You are not logged in, please login to gain access', 401)
    );

  const token = req.headers.authorization.split(' ')[1];

  if (!token)
    return next(
      new AppError('You are not logged in, please login to gain access', 401)
    );

  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  const freshUser = await User.findById(decodedToken.id);
  if (!freshUser) {
    return next(
      new AppError('The user belonging to the token no longer exist', 401)
    );
  }

  const passNotChanged = freshUser.passNotChangedAfterToken(decodedToken.iat);

  if (passNotChanged)
    return next(
      new AppError(
        'User recently changed his password, please login to gain access',
        401
      )
    );

  req.user = freshUser;

  next();
});

exports.restrictTo = (...permittedRole) => {
  return (req, res, next) => {
    try {
      if (!permittedRole.includes(req.user.role)) {
        throw Error('Admin resources! Access denied');
      }
      next();
    } catch (error) {
      res.json({
        Error: error.message
      });
    }
  };
};
