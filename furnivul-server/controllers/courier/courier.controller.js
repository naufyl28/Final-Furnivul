const Courier = require("../../models/courier/courier");
const CourierService = require("../../models/courier/courier.service");
const { sendSuccessResponse, sendErrorResponse } = require("../../helpers/response.helper");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const couriers = await Courier.find().populate("_idCourierService");

      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!page || !limit) {
        if (couriers.length === 0) {
          console.log("Courier is empty")
          return sendSuccessResponse(
            res,
            204,
            "Get all couriers success",
            "Courier is empty"
          );
        }

        sendSuccessResponse(res, 200, "Get all couriers success", couriers);
      } else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {};

        if (endIndex < couriers.length) {
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
        result.couriers = couriers.slice(startIndex, endIndex);

        sendSuccessResponse(res, 200, "Get all couriers page " + page, result);
      }
    } catch (error) {
      sendErrorResponse(res, 500, "Error get all couriers", error);
    }
  },
  getDatabyID: async (req, res) => {
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

      const courier = await Courier.findById(id).populate("_idCourierService");
      sendSuccessResponse(res, 200, "Get courier by id success", courier);
    } catch (error) {
      sendErrorResponse(res, 500, "Error get courier by id", error);
    }
  },
  updateData: async (req, res) => {
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

      let { courier, _idCourierService } = req.body;
      if (!courier || !_idCourierService) {
        return sendErrorResponse(
          res,
          400,
          "Courier and courier service required",
          new Error("Courier and courier service must be not empty")
        );
      }

      const updateCourier = await Courier.findByIdAndUpdate(
        id,
        { courier, _idCourierService },
        { new: true }
      );
      sendSuccessResponse(res, 200, "Update courier success", updateCourier);
    } catch (error) {
      sendErrorResponse(res, 500, "Error update courier", error);
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

      const courier = await Courier.findByIdAndDelete(id);
      if (!courier) {
        return sendErrorResponse(
          res,
          400,
          "Courier not found",
          new Error("Courier not found")
        );
      }

      const courierservice = await CourierService.deleteMany(
        { _id: { $in: courier._idCourierService } }
      );

      if (!courierservice) {
        return sendErrorResponse(
          res,
          400,
          "Courier service not found",
          new Error("Courier service not found")
        );
      }

      sendSuccessResponse(res, 200, "Delete courier success");
    } catch (error) {
      sendErrorResponse(res, 500, "Error delete courier", error);
    }
  },
  addData: async (req, res) => {
    try {
      let { courier, _idCourierService } = req.body;
      if (!courier || !_idCourierService) {
        return sendErrorResponse(
          res,
          400,
          "Courier and courier service required",
          new Error("Courier and courier service must be not empty")
        );
      }

      const newCourier = await Courier.create({
        courier,
        _idCourierService,
      });
      sendSuccessResponse(res, 200, "Add courier success", {
        _id: newCourier._id,
        ...newCourier._doc,
      });
    } catch (error) {
      sendErrorResponse(res, 500, "Error add courier", error);
    }
  },
};
