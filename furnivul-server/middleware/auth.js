const jwt = require("jsonwebtoken");
require("dotenv").config();
const { sendErrorResponse } = require("../helpers/response.helper");
const JWT_KEY = process.env.JWT_KEY;

const auth = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header)
      return sendErrorResponse(
        res,
        400,
        "Authorization header required",
        new Error("Authorization header must be provided")
      );

    const token = header.split(" ")[1];
    if (!token)
      return sendErrorResponse(
        res,
        400,
        "Token required",
        new Error("Token must be provided")
      );

    const decoded = jwt.verify(token, JWT_KEY);
    req.payload = decoded;
    next();
  } catch (error) {
    return sendErrorResponse(res, 500, "Error authorization", error);
  }
};

const isAdmin = (req, res, next) => {
  const { id_level } = req.payload;
  if (id_level !== 1) {
    return sendErrorResponse(
      res,
      403,
      "Forbidden access",
      new Error("Forbidden access")
    );
  }
  next();
};

module.exports = { auth, isAdmin };
