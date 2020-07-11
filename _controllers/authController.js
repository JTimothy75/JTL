// const bcrypt = require('bcrypt');
// const chalk = require('chalk');
const util = require('util');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Email = require('./../_utilities/email');

const AppError = require('../_utilities/appError');
const catchAsync = require('./../_utilities/catchAsync');
const User = require('../_models/userModel');

const signToken = userId => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie('jwt', token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  });

  const url = 0;
  await new Email(newUser, url).sendWelcome();

  createSendToken(newUser, 201, req, res);
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

  createSendToken(user, 201, req, res);
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

  const passChanged = freshUser.changedpasswordAfter(decodedToken.iat);

  if (passChanged)
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

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  // console.log(req);

  if (req.cookies.jwt) {
    // 2) Verification of token
    const decoded = await util.promisify(jwt.verify)(
      req.cookies.jwt,
      process.env.JWT_SECRET
    );

    // 3) Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next();
    }
    // 4) Check if user changed password after token was generated
    if (currentUser.changedpasswordAfter(decoded.iat)) {
      return next();
    }

    // console.log(currentUser);

    // There is a logged in user
    res.locals.user = currentUser;

    res.status(200).json({
      status: 'success',
      data: {
        user: currentUser
      }
    });
  } else {
    res.sendStatus(401);
    // .send('Unauthorized');
  }
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with this email', 404));
  }

  const resetToken = user.createForgotPasswordToken();
  await user.save({ validateBeforeSave: false });
  try {
    const passwordResetLink = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/users/resetPassword/${resetToken}`;

    await new Email(user, passwordResetLink).sendPasswordReset();

    console.log(resetToken);

    res.status(200).json({
      status: 'success',
      message: 'Your password reset link has been sent to your email'
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if POSTed current password is correct
  if (!(await user.checkPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong.', 401));
  }

  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // User.findByIdAndUpdate will NOT work as intended!

  // 4) Log user in, send JWT
  createSendToken(user, 200, req, res);
});

exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
};
