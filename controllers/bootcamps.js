const BootcampModel = require("./../models/Bootcamp");
// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
const getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await BootcampModel.find();
    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
const getBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findOne({
      _id: req.params.id,
    });
    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: `Bootcamp with id: ${req.params.id} is not found`,
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
const updateBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: `Bootcamp with id: ${req.params.id} is not found`,
      });
    }
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
const deleteBootcampById = async (req, res, next) => {
  try {
    const bootcamp = await BootcampModel.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: `Bootcamp with id: ${req.params.id} is not found`,
      });
    }
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({
      success: false,
    });
  }
};

module.exports = {
  getAllBootcamps,
  getBootcampById,
  createBootcamp,
  updateBootcampById,
  deleteBootcampById,
};
