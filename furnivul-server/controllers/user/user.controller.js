const User = require("../../models/user");
const sendErrorResponse = require("../../handlers/error.handler");
const sendSuccessResponse = require("../../handlers/success.handler");
module.exports = {
  getAllData: async (req, res) => {
    try {
      const users = await User.find();
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!page || !limit) {
        sendSuccessResponse(res, 200, "Get all users success", users);
      } else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {};

        if (endIndex < users.length) {
          result.next = {
            page: page + 1,
            limit: limit,
          };
        }

        if (startIndex > 0) {
          result.previous = {
            page: page - 1,
            limit: limit,
          };
        }
        result.users = users.slice(startIndex, endIndex);

        sendSuccessResponse(res, 200, "Get all users page " + page, result);
      }
    } catch (error) {
      sendErrorResponse(res, 500, "Error get all users", error);
    }
  },
  getDatabyID: (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Id not found",
          new Error("Id not found or empty")
        );
      }

      const user = User.findById(id);
      sendSuccessResponse(res, 200, "Get user by id success", user);
    } catch (error) {
      sendErrorResponse(res, 500, "Error get user by id", error);
    }
  },
  updateData: async (req, res) => {
    try {
      const { id } = req.payload; // get by id from token, change to req.params if you want to get by id from params

      let { phone, province, district, subdistrict, zipcode } = req.body;

      if (!phone || !province || !district || !subdistrict || !zipcode) {
        return sendErrorResponse(
          res,
          400,
          "All fields required",
          new Error("All fields must be not empty")
        );
      }

      const updateProfile = await User.findByIdAndUpdate(
        id,
        {
          phone,
          province,
          district,
          subdistrict,
          zipcode,
        },
        { new: true }
      );

      sendSuccessResponse(res, 200, "Update profile success", updateProfile);
    } catch (error) {
      sendErrorResponse(res, 500, "Error update profile", error);
    }
  },
  deleteData: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Id not found",
          new Error("Id not found or empty")
        );
      }

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Id not found",
          new Error("Id not found or empty")
        );
      }

      const deleteUser = await User.findByIdAndDelete(id);
      if (!deleteUser) {
        return sendErrorResponse(
          res,
          400,
          "User not found",
          new Error("User not found")
        );
      }
      sendSuccessResponse(res, 200, "Delete user success", deleteUser);
    } catch (error) {
      sendErrorResponse(res, 500, "Error delete user", error);
    }
  },
};
