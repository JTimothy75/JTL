const multer = require('multer');
const sharp = require('sharp');
const crypto = require('crypto');
// const { Promise } = require('mongoose');

const Product = require('../_models/productModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  // if (!req.files.imageCover || !req.files.images) return next();
  if (!req.files) return next();
  if (!req.files.imageCover) return next();

  const randomCode = crypto.randomBytes(16).toString('hex');
  req.body.imageCover = `product-${randomCode}-${Date.now()}-cover.jpeg`;
  req.body.images = [req.body.imageCover];

  await sharp(req.files.imageCover[0].buffer)
    .resize(1500, 1500, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`_public/img/products/${req.body.imageCover}`);

  if (!req.files.images) return next();
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `product-${randomCode}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(1500, 1500, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 1 }
        })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`_public/img/products/${filename}`);

      req.body.images.push(filename);
    })
  );
  next();
});

exports.uploadProductImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 7 }
]);

// let relatedProductQuery;

exports.setRelatedProductQuery = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.productID);
  req.specialQuery = {
    _id: { $ne: req.params.productID },
    category: product.category
  };

  next();
});

exports.setNonZeroQtyProductQuery = catchAsync(async (req, res, next) => {
  req.specialQuery = { quantity: { $gte: 1 } };

  next();
});

exports.setSearchQuery = catchAsync(async (req, res, next) => {
  console.log(req.query);
  if (req.query.search) {
    req.specialQuery = {
      // name: { $regex: req.params.searchString, $options: 'i' }
      name: { $regex: req.query.search, $options: 'i' }
    };
  }

  // console.log(req.query.search);
  next();
});

exports.addProductColour = catchAsync(async (req, res, next) => {
  const parentId = req.params.parentId ? req.params.parentId : req.parentId;
  const doc = await Product.findById({ _id: parentId });

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${parentId}`, 404)
    );
  }
  const duplicateField = doc.colour.filter(el => {
    return req.body.some(elBody => el.colour === elBody.colour);
  });

  if (duplicateField.length > 1) {
    return next(
      new AppError(
        `Duplicate key, ${duplicateField.map(
          el => el.colour
        )} is already on this document. use the product colour update route to update document product colour`,
        500
      )
    );
  }

  req.body.forEach(el => {
    doc.colour.push(el);
  });

  doc.quantity += req.body.reduce((preVal, curVal) => {
    return curVal.quantity + preVal;
  }, 0);

  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.updateProductColour = catchAsync(async (req, res, next) => {
  const parentId = req.params.parentId ? req.params.parentId : req.parentId;
  const doc = await Product.findById({ _id: parentId });
  const SubDoc = doc.colour.id(req.params.id);
  if (!SubDoc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  doc.quantity -= SubDoc.quantity;
  SubDoc.quantity = req.body.quantity;
  doc.quantity += SubDoc.quantity;

  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.removingProductColour = catchAsync(async (req, res, next) => {
  const parentId = req.params.parentId ? req.params.parentId : req.parentId;

  const doc = await Product.findById({ _id: parentId });
  const SubDoc = doc.colour.id(req.params.id);

  if (!SubDoc) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  // console.log(doc.colour.id(req.params.id).quantity);
  doc.quantity -= doc.colour.id(req.params.id).quantity;
  doc.colour.id(req.params.id).remove();
  await doc.save();

  res.status(200).json({
    status: 'success',
    data: {
      doc
    }
  });
});

exports.getSearchedProduct = factory.getAll(Product);
exports.getRelatedProduct = factory.getAll(Product);
exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product, [
  {
    path: 'reviews',
    select: 'review rating '
  },
  {
    path: 'category',
    select: 'name _id'
  }
]);
exports.createProduct = catchAsync(async (req, res, next) => {
  if (!req.body.colour) next(new AppError(`Product must have a colour`, 500));
  const doc = await Product.create(req.body);

  doc.quantity = doc.colour.reduce((preVal, curVal) => {
    return curVal.quantity + preVal;
  }, 0);

  await doc.save();
  res.status(201).json({
    status: 'success',
    results: 1,
    data: {
      data: doc
    }
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  if (req.body.colour) {
    delete req.body.colour;
  }
  if (req.body.quantity) {
    delete req.body.quantity;
  }

  const document = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!document) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      data: document
    }
  });
});
exports.deleteProduct = factory.deleteOne(Product);

exports.getProductStats = catchAsync(async (req, res, next) => {
  const stats = await Product.aggregate([
    {
      $match: {
        ratingsAverage: { $gte: 3 }
      }
    },
    {
      $group: {
        _id: '$ratingsAverage',
        numProduct: { $sum: 1 },
        numRating: { $sum: 'ratingsQuantity' },
        avgRating: { $avg: '$ratingsAverage' },
        avgPrice: { $avg: '$price' },
        avgSales: { $avg: '$sales' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats
    }
  });
});
