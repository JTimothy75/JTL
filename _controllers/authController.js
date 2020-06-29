const bcrypt = require('bcrypt');
const User = require('../_models/userModel');

exports.signup = async (req, res, next) => {
  const newUser = await User.create({
    name: req.name,
    email: req.email,
    password: req.password,
    passwordConfirm: req.passwordConfirm
  });

  res.status(201).json({
    status: 'success',
    data: {
      User: newUser
    }
  });
};
