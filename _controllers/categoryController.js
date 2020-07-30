const Category = require('../_models/categoryModel');
// const catchAsync = require('../_utilities/catchAsync');
// const AppError = require('../_utilities/appError');
const factory = require('./handlerFactory');

exports.getAllCategories = factory.getAll(Category);
exports.getCategory = factory.getOne(Category);
exports.createCategory = factory.createOne(Category);
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
