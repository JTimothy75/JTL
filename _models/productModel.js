const mongoose = require('mongoose');
const slugify = require('slugify');

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
    specification: Object,
    description: {
      type: String,
      required: [true, 'Please describe the product']
    },
    lowPrice: {
      type: Number
    },
    highPrice: {
      type: Number
    },
    discountedLowPrice: {
      type: Number
    },
    discountedHighPrice: {
      type: Number
    },
    colour: [
      {
        colour: {
          type: String,
          required: [true, 'Please tell us the colour of this product'],
          trim: true
        },
        quantity: {
          type: Number,
          required: [
            true,
            'Please tell us the quantity for this colour of the product'
          ],
          trim: true
        },
        price: {
          type: Number,
          required: [true, 'Please tell us the price of the product']
        },
        discountPrice: {
          type: Number
        },
        colourImage: {
          type: String,
          trim: true
        }
      }
    ],
    priceDiscountPercent: {
      type: Number,
      default: 0,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < 100;
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
      trim: true
    },
    sales: {
      type: Number,
      default: 0
    },
    imageCover: {
      type: String,
      trim: true
    },
    images: {
      type: [String],
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

productSchema.index({ price: 1, ratingsAverage: -1 });
productSchema.index({ slug: 1 });

productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id'
});

[].sort();

productSchema.pre('save', async function(next) {
  this.colour.forEach(el => {
    el.colour = el.colour.toLowerCase();
    el.discountPrice = (
      el.price -
      (this.priceDiscountPercent * el.price) / 100
    ).toFixed(2);
  });

  this.lowPrice = Math.min(...this.colour.map(el => el.price)).toFixed(2);
  this.highPrice = Math.max(...this.colour.map(el => el.price)).toFixed(2);

  this.discountedLowPrice = Math.min(
    ...this.colour.map(el => el.discountPrice)
  ).toFixed(2);
  this.discountedHighPrice = Math.max(
    ...this.colour.map(el => el.discountPrice)
  ).toFixed(2);

  this.slug = slugify(this.name, { lower: true });

  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
