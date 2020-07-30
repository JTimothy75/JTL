const AppError = require('../_utilities/appError');
const catchAsync = require('../_utilities/catchAsync');
const APIFeatures = require('../_utilities/apiFeatures');

exports.deleteOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(
        new AppError(`There is no document with this id: ${req.params.id}`, 404)
      );
    }

    res.status(204).json({
      status: 'success',
      message: 'Document has been deleted'
    });
  });

exports.updateOne = Model =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
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

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: 'success',
      results: 1,
      data: {
        data: doc
      }
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`There is no document with this id: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: 'success',
      results: 1,
      data: {
        data: doc
      }
    });
  });

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    //   Tp allow for nexted get review on product
    let filter = {};
    // if (req.params.productId) filter = { product: req.params.productId };
    if (req.specialQuery) {
      filter = req.specialQuery;
    }
    // console.log(filter);

    // EXECUTE QUERY
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    // const docs = await features.query.explain();
    const docs = await features.query;

    res.status(200).json({
      status: 'success',
      results: docs.length,
      data: {
        data: docs
      }
    });
  });

exports.createSubOne = (Model, subModelName) =>
  catchAsync(async (req, res, next) => {
    const parentId = req.params.parentId ? req.params.parentId : req.parentId;

    const doc = await Model.findByIdAndUpdate(
      { _id: parentId },
      { $push: { [subModelName]: req.body } },
      { new: true, runValidators: true }
    );

    if (!doc) {
      return next(
        new AppError(`There is no document with this id: ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.updateSubOne = (Model, subModelName) =>
  catchAsync(async (req, res, next) => {
    const parentId = req.params.parentId ? req.params.parentId : req.parentId;
    const doc = await Model.findById({ _id: parentId });
    const SubDoc = doc[subModelName].id(req.params.id);
    if (!SubDoc) {
      return next(
        new AppError(`There is no document with this id: ${req.params.id}`, 404)
      );
    }
    const bodyObj = Object.keys(req.body);
    bodyObj.forEach(el => {
      SubDoc[el] = req.body[el];
    });
    await doc.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });

exports.deleteSubOne = (Model, subModelName) =>
  catchAsync(async (req, res, next) => {
    const parentId = req.params.parentId ? req.params.parentId : req.parentId;
    const doc = await Model.findById({ _id: parentId });
    const SubDoc = doc[subModelName].id(req.params.id);

    if (!SubDoc) {
      return next(
        new AppError(`There is no document with this id: ${req.params.id}`, 404)
      );
    }
    doc[subModelName].id(req.params.id).remove();
    await doc.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      data: {
        doc
      }
    });
  });
