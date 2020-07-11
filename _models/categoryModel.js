const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'You can not create a category without name'],
      unique: true
    }
  },
  { timestamps: true }
);

const Category = mongoose.model('category', categorySchema);

module.exports = Category;
