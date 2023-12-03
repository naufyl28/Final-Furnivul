const Cart = require("../../models/cart/cart");

const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../../helpers/response.helper");
const Product = require("../../models/product/product");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const { id } = req.payload;
      const carts = await Cart.find({
        _userId: id,
      }).populate("_productId");

      if (!carts) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Cart not found")
        );
      }

      if (carts.length === 0) {
        return sendSuccessResponse(res, 200, "Success get all data", "Empty");
      }

      sendSuccessResponse(res, 200, "Success get all data", carts);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  getDatabyID: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.find({
        _productId: id,
      }).populate("_productId");

      if (!cart) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Cart not found")
        );
      }

      sendSuccessResponse(res, 200, "Success get data by id", cart);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  updateData: async (req, res) => {
    try {
      const { id } = req.params;
      const { _productId, qty } = req.body;

      const isExist = await Product.find({
        _productId: _productId,
        qty: qty,
      });

      if (!isExist) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Product not found")
        );
      }

      const cart = await Cart.findByIdAndUpdate(
        id,
        {
          _productId,
          qty,
        },
        {
          new: true,
        }
      );

      if (!cart) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Cart not found")
        );
      }

      sendSuccessResponse(res, 200, "Success update data", cart);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Cart.findByIdAndDelete(id);

      if (!cart) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Cart not found")
        );
      }

      sendSuccessResponse(res, 200, "Success delete data", cart);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  addData: async (req, res) => {
    try {
      const { id } = req.payload;
      const { _productId } = req.body;

      const cart = await Cart.create({
        _userId: id,
        _productId,
      });

      sendSuccessResponse(res, 200, "Success add data", cart);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },
};
