const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
const validator = require('validator');
// const uuidv1 = require('uuidv1');

const userSchema = mongoose.Schema(
  {
    // firstName: {
    //   type: String,
    //   trim: true,
    //   required: [true, 'Please give us your first name']
    // },
    // lastName: {
    //   type: String,
    //   trim: true,
    //   required: [true, 'Please give us your last name']
    // },
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
      validator: [validator.isEmail, 'Please provide a valid email.']
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Please give us your email'],
      mimlength: 8
    },
    passwordConfirm: {
      type: String,
      trim: true,
      required: [true, 'Please give us your email']
    },
    interest: {
      type: String,
      trim: true,
      required: [true, 'Please give us your last name']
    },
    role: {
      type: String,
      default: 'user',
      trim: true,
      enum: ['user', 'admin'],
      required: [true, 'Please give us your email']
    },
    cart: {
      type: Array,
      default: []
    },
    history: {
      type: Array,
      default: []
    },
    address: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
