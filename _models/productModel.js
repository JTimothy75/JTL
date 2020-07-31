const mongoose = require('mongoose');
const slugify = require('slugify');
// const Review = require('./reviewModel');

// const Category = require('../_models/categoryModel');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us the product name'],
      trim: true,
      unique: true,
      maxlength: [
        100,
        'A product name must have less or equal then 40 characters'
      ],
      minlength: [
        5,
        'A product name must have more or equal then 10 characters'
      ]
    },
    slug: String,
    summary: {
      type: String,
      trim: true,
      required: [true, 'A product must have a summary']
    },
    description: {
      type: String,
      required: [true, 'Please describe the product']
    },
    price: {
      type: Number,
      required: [true, 'Please tell us the price of the product']
    },
    colour: [
      {
        colour: {
          type: String,
          required: [true, 'Please tell us the colour of this product'],
          trim: true,
          unique: true
        },
        quantity: {
          type: Number,
          required: [
            true,
            'Please tell us the quantity for this colour of the product'
          ],
          trim: true
        }
      }
    ],
    priceDiscount: {
      type: Number,
      default: 0,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    tag: {
      type: String,
      trim: true
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: val => val.toFixed(1) //Math.round(val * 10) / 10 // 4.666666, 46.6666, 47, 4.7
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    quantity: {
      type: Number,
      required: [true, 'Please tell us the quantity of the product'],
      trim: true
    },
    sales: {
      type: Number,
      default: 0
    },
    imageCover: {
      type: String,
      // required: [true, 'Please upload an image of the product'],
      trim: true
    },
    images: {
      type: [String],
      // required: [true, 'Please upload an image of the product'],
      trim: true
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: [true, 'Product must have category']
    },
    shipping: {
      default: false,
      type: Boolean
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// productSchema.index({ price: 1 });
productSchema.index({ price: 1, ratingsAverage: -1 });
productSchema.index({ slug: 1 });

productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id'
});

productSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });

  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
