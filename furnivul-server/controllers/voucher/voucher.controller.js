const Voucher = require("../../models/voucher/voucher");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../../helpers/response.helper");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const vouchers = await Voucher.find();
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!page || !limit) {
        if (vouchers.length === 0) {
          return sendSuccessResponse(res, 204, "Get all vouchers success", "Voucher is empty");
        }
        sendSuccessResponse(res, 200, "Get all vouchers success", vouchers);
      } else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {};

        if (endIndex < vouchers.length) {
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
        result.vouchers = vouchers.slice(startIndex, endIndex);

        sendSuccessResponse(res, 200, "Get all vouchers page " + page, result);
      }
    } catch (error) {
      sendErrorResponse(res, 500, "Error get all vouchers", error);
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

      const voucher = await Voucher.findById(id);

      if (!voucher) {
        return sendErrorResponse(
          res,
          404,
          "Voucher not found",
          new Error("Voucher not found")
        );
      }

      sendSuccessResponse(res, 200, "Get voucher by id success", voucher);
    } catch (error) {
      sendErrorResponse(res, 500, "Error get voucher by id", error);
    }
  },
  updateData: async (req, res) => {
    try {
      const { id } = req.params;
      let { name, discount, description, code, start_date, end_date } =
        req.body;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Id not found",
          new Error("Id not found or empty")
        );
      }

      if (
        !name ||
        !discount ||
        !description ||
        !code ||
        !start_date ||
        !end_date
      ) {
        return sendErrorResponse(
          res,
          400,
          "Data not found",
          new Error("Data not found or empty")
        );
      }

      const update = await Voucher.findByIdAndUpdate(
        id,
        { name, discount, description, code, start_date, end_date },
        { new: true }
      );

      if (!update) {
        return sendErrorResponse(
          res,
          404,
          "Voucher not found",
          new Error("Voucher not found")
        );
      }

      sendSuccessResponse(res, 200, "Update voucher success", update);
    } catch (error) {
      sendErrorResponse(res, 500, "Error update voucher", error);
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

      const voucher = await Voucher.findByIdAndDelete(id);
      if (!voucher) {
        return sendErrorResponse(
          res,
          404,
          "Voucher not found",
          new Error("Voucher not found")
        );
      }

      sendSuccessResponse(res, 200, "Delete voucher success", voucher);
    } catch (error) {
      sendErrorResponse(res, 500, "Error delete voucher", error);
    }
  },
  addData: async (req, res) => {
    try {
      let { name, discount, description, code, start_date, end_date } =
        req.body;

      if (
        !name ||
        !discount ||
        !description ||
        !code ||
        !start_date ||
        !end_date
      ) {
        return sendErrorResponse(
          res,
          400,
          "All field must be filled",
          new Error(
            "name, discount, description, code, start_date, end_date must be filled"
          )
        );
      }

      const voucher = await Voucher.create({
        name,
        discount,
        description,
        code,
        start_date,
        end_date,
      });

      sendSuccessResponse(res, 201, "Add voucher success", voucher);
    } catch (error) {
      sendErrorResponse(res, 500, "Error add voucher", error);
    }
  },
};
