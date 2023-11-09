const ErrorResponse = require("../utils/error-response");

const notFoundHandler = (req, res, next) => {
  return next(new ErrorResponse("The resource is not found", 404));
};

module.exports = notFoundHandler;
