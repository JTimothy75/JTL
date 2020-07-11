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
    interest: {
      type: String,
      trim: true
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
    password: {
      type: String,
      required: [true, 'Please give us your email'],
      mimlength: 8,
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please give us your email'],
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
  { timestamps: true }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  return next();
});

userSchema.pre(/^find/, function(next) {
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

const User = mongoose.model('user', userSchema);

module.exports = User;
