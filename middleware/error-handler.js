const ErrorResponse = require("../utils/error-response");

const errorHandler = (err, req, res, next) => {
  let message = "Server Error";
  let statusCode = 500;
  console.log(err.stack.red);
  if (err instanceof ErrorResponse) {
    message = err.message;
    statusCode = err.statusCode;
  } else {
    if (err.name === "CastError") {
      //Mongoose ObjectId Error
      message = `Resource with _id: ${err.value} is not found`;
      statusCode = 404;
    } else if (err.code === 11000) {
      //Mongoose Duplicate Record Error
      message = "The record already exists";
      statusCode = 400;
    }
  }
  return res.status(statusCode).json({ message, success: false });
};

module.exports = errorHandler;
