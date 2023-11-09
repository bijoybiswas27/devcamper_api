const BootcampModel = require("./../models/Bootcamp");
const ErrorResponse = require("../utils/error-response");
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAllBootcamps = async (req, res, next) => {
  const bootcamps = await BootcampModel.find();
  res.status(200).json({
    success: true,
    count: bootcamps.length,
    data: bootcamps,
  });
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcampById = async (req, res, next) => {
  const bootcamp = await BootcampModel.findOne({
    _id: req.params.id,
  });
  if (!bootcamp) {
    return next();
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = async (req, res, next) => {
  const bootcamp = await BootcampModel.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp,
  });
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcampById = async (req, res, next) => {
  const bootcamp = await BootcampModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (!bootcamp) {
    return next();
  }
  res.status(200).json({
    success: true,
    data: bootcamp,
  });
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcampById = async (req, res, next) => {
  const bootcamp = await BootcampModel.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
    return next();
  }
  res.status(200).json({
    success: true,
    data: {},
  });
};

module.exports = {
  getAllBootcamps,
  getBootcampById,
  createBootcamp,
  updateBootcampById,
  deleteBootcampById,
};
