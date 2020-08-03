const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const validator = require('validator');
// const uuidv1 = require('uuidv1');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Please give us your last name']
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Please give us your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email.']
    },
    emailConfirmToken: String,
    emailConfirm: {
      type: Boolean,
      default: false
    },
    photo: {
      type: String,
      default: 'default.jpeg'
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    tel: Number,
    contactAddress: [
      {
        streetAddress: String,
        city: String,
        province: String,
        country: String,
        zip: Number,
        defaultAddress: Boolean
      }
    ],
    interest: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      default: 'user',
      trim: true,
      enum: ['user', 'product_manager', 'admin', 'root_admin'],
      required: [true, 'Role is required']
    },

    cart: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
          unique: true,
          required: [true, 'Cart item must have to a Product!']
        },
        name: {
          type: String,
          ref: 'User',
          required: [true, 'Cart item must belong to a name']
        },
        date: {
          type: Date,
          defualt: Date.now()
        }
      }
    ],
    wishList: [mongoose.Schema.ObjectId],

    password: {
      type: String,
      required: [true, 'Please enter your password'],
      mimlength: 8,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please enter your confirm password'],
      validate: {
        validator: function(el) {
          return el === this.password;
        },
        message: 'Your password does not match'
      }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: String,
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  return next();
});

userSchema.pre(/^findB/, function(next) {
  this.populate({
    path: 'cart.product',
    select: 'price priceDiscount name description ratingsAverage imageCover'
  });
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.checkPassword = async function(candidatePassword, password) {
  return await bcrypt.compare(candidatePassword, password);
};

userSchema.methods.changedpasswordAfter = function(tokenDate) {
  if (this.passwordChangedAt) {
    return Math.floor(this.passwordChangedAt.getTime() / 1000) > tokenDate;
  }

  return false;
};

userSchema.methods.createForgotPasswordToken = function() {
  const resetPasswordToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetPasswordToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 + 60 + 1000;

  return resetPasswordToken;
};

userSchema.methods.createEmailConfirmToken = function() {
  const emailConfirmToken = crypto.randomBytes(32).toString('hex');

  this.emailConfirmToken = crypto
    .createHash('sha256')
    .update(emailConfirmToken)
    .digest('hex');

  return emailConfirmToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
