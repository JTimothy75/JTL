const Category = require('../_models/categoryModel');
const catchAsync = require('../_utilities/catchAsync');
const AppError = require('../_utilities/appError');

exports.createCategory = catchAsync(async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      category
    }
  });
});

exports.getAllCategorys = catchAsync(async (req, res, next) => {
  const categorys = await Category.find();

  res.status(200).json({
    status: 'success',
    results: categorys.length,
    data: {
      categorys
    }
  });
});

exports.getCategory = catchAsync(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(
      new AppError(`There is no category with this id: ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      category
    }
  });
});

exports.updateCategory = catchAsync(async (req, res, next) => {
  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedCategory) {
    return next(
      new AppError(`There is no category with this id: ${req.params.id}`, 404)
    );
  }
  //   console.log(req.body);
  res.status(200).json({
    status: 'success',
    results: 1,
    data: {
      category: updatedCategory
    }
  });
});

exports.deleteCategory = catchAsync(async (req, res, next) => {
  const deletedCategory = await Category.findByIdAndDelete(req.params.id);

  if (!deletedCategory) {
    return next(
      new AppError(`There is no category with this id: ${req.params.id}`, 404)
    );
  }

  console.log(deletedCategory);

  res.status(201).json({
    status: 'success',
    message: 'Category has been deleted'
  });
});
