const multer = require('multer');
const sharp = require('sharp');
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

exports.uploadProductImages = upload.fields([
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 7 },
  { name: 'colourImage', maxCount: 1 }
]);

const resizeProductImages = async (files, productId, newProduct) => {
  // if (!req.files.imageCover || !req.files.images) return next();

  if (newProduct) {
    if (!files.imageCover || !files.colourImage) return false;
  }

  const uploadName = {};

  if (files.imageCover) {
    uploadName.imageCover = `product-${productId}-${Date.now()}-cover.jpeg`;
    uploadName.images = [uploadName.imageCover];

    await sharp(files.imageCover[0].buffer)
      .resize(1500, 1500, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`_public/img/products/${uploadName.imageCover}`);
  }

  if (files.colourImage) {
    uploadName.colourImage = `product-${productId}-${Date.now()}-${
      files.colourImage[0].colour
    }.jpeg`;

    await sharp(files.colourImage[0].buffer)
      .resize(1500, 1500, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`_public/img/products/${uploadName.colourImage}`);
  }

  if (files.images) {
    if (!uploadName.images) {
      uploadName.images = [];
    }
    await Promise.all(
      files.images.map(async (file, i) => {
        const filename = `product-${productId}-${Date.now()}-${i + 1}.jpeg`;
        await sharp(file.buffer)
          .resize(1500, 1500, {
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 1 }
          })
          .toFormat('jpeg')
          .jpeg({ quality: 90 })
          .toFile(`_public/img/products/${filename}`);

        uploadName.images.push(filename);
      })
    );
  }

  return uploadName;
};

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
  // console.log(req.query);
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

  if (!req.files || !req.files.colourImage || !req.body.colour.colour)
    return next(
      new AppError(
        'Upload the colour image for this product and specify it name',
        400
      )
    );

  if (!doc) {
    return next(
      new AppError(`There is no document with this id: ${parentId}`, 404)
    );
  }

  req.body.colour.colour = req.body.colour.colour.toLowerCase();
  if (doc.colour.some(el => el.colour === req.body.colour.colour)) {
    return next(
      new AppError(
        `Duplicate key, ${req.body.colour.colour} is already on this document. use the product colour update route to update document product colour`,
        400
      )
    );
  }

  req.files.colourImage[0].colour = req.body.colour.colour;
  const imageUpload = await resizeProductImages(req.files, doc._id, false);

  req.body.colour.colourImage = imageUpload.colourImage;
  doc.colour.push(req.body.colour);
  doc.quantity += +req.body.colour.quantity;

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

  SubDoc.price = +req.body.price;

  doc.quantity -= +SubDoc.quantity;
  SubDoc.quantity = +req.body.quantity;
  doc.quantity += +SubDoc.quantity;

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
  doc.quantity -= +doc.colour.id(req.params.id).quantity;
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
  if (!req.body.colour || !req.body.colour.colour)
    return next(
      new AppError(`Product must have a colour and a colour name`, 400)
    );
  if (!(typeof req.body.colour.colour === 'string')) {
    return next(
      new AppError(`Can't cast type colour, Colour should be an object`, 400)
    );
  }

  if (!req.files || !req.files.imageCover || !req.files.colourImage)
    return next(
      new AppError('Upload a cover and colour image for this product', 400)
    );
  req.body.colour.colour = req.body.colour.colour.toLowerCase();
  req.files.colourImage[0].colour = req.body.colour.colour;
  const doc = await Product.create(req.body);

  const imageUpload = await resizeProductImages(req.files, doc._id, true);

  if (
    !imageUpload.imageCover &&
    !imageUpload.images &&
    !imageUpload.colourImage
  ) {
    await Product.findByIdAndDelete({ _id: doc._id });

    return next(
      new AppError('Please upload a cover image for this product', 400)
    );
  }

  const iColour = doc.colour.findIndex(
    el => el.colour === req.body.colour.colour
  );
  doc.imageCover = imageUpload.imageCover;
  doc.colour[iColour].colourImage = imageUpload.colourImage;
  doc.images = imageUpload.images;
  doc.quantity = req.body.colour.quantity;

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
  const body = Object.keys(req.body);
  body.forEach(el => {
    const dontUpdate = [
      'colour',
      'quantity',
      'imageCover',
      'images',
      'price',
      'lowPrice',
      'highPrice'
    ];
    if (dontUpdate.includes(el)) {
      delete req.body[el];
    }
  });

  const document = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!document) {
    return next(
      new AppError(`There is no document with this id: ${req.params.id}`, 404)
    );
  }

  if (req.files) {
    const imageUpload = await resizeProductImages(
      req.files,
      req.params.id,
      false
    );

    if (imageUpload.imageCover) {
      document.imageCover = imageUpload.imageCover;
    }

    if (imageUpload.images) {
      imageUpload.images.forEach(el => document.images.push(el));
    }

    await document.save();
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
