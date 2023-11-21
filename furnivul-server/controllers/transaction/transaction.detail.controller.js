const Transaction = require("../../models/transaction/transaction");
const TransactionDetail = require("../../models/transaction/transaction.detail");
const Product = require("../../models/product/product");
const Courier = require("../../models/courier/courier");
const CourierService = require("../../models/courier/courier.service");
const Voucher = require("../../models/voucher/voucher");
const User = require("../../models/user");

const {
  sendErrorResponse,
  sendSuccessResponse,
} = require("../../helpers/response.helper");

const validateRequest = (req, res) => {
  let { id } = req.params;
  const userId = req.payload.id;
  let {
    _transactionId,
    _productId,
    _courierId,
    _courierServiceId,
    _voucherId,
    qty,
  } = req.body;

  if (!id) {
    return sendErrorResponse(
      res,
      400,
      "Failed to get transaction data",
      new Error("Id not found or empty")
    );
  }

  if (!userId) {
    return sendErrorResponse(
      res,
      400,
      "Failed to get transaction data",
      new Error("You must login first to access this page(s).")
    );
  }

  if (
    !_transactionId ||
    !_productId ||
    !_courierId ||
    !_courierServiceId ||
    !qty
  ) {
    return sendErrorResponse(
      res,
      400,
      "All fields required",
      new Error("All fields must be not empty")
    );
  }
  return {
    id,
    userId,
    _transactionId,
    _productId,
    _courierId,
    _courierServiceId,
    _voucherId,
    qty,
  };
};

module.exports = {
  getAllData: async (req, res) => {
    try {
      let userId = req.payload.id;
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!userId) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transactions data",
          new Error("You must login first to access this page(s).")
        );
      }

      let transactions = await Transaction.find().populate("_userId");

      if (!transactions) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transactions data",
          new Error("Transactions not found")
        );
      }

      let transactionsDetail = [];

      for (let transaction of transactions) {
        let detail = await TransactionDetail.find({
          _transactionId: transaction._id,
        })
          .populate("_transactionId")
          .populate("_productId")
          .populate("_courierId")
          .populate("_courierServiceId");

        transactionsDetail.push(...detail);
      }

      if (!transactionsDetail.length) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transactions data",
          new Error("Transactions not found")
        );
      }

      if (!page || !limit) {
        if (transactionsDetail.length === 0) {
          return sendSuccessResponse(
            res,
            204,
            "Get all transaction data success",
            "Transaction is empty"
          );
        }

        return sendSuccessResponse(
          res,
          200,
          "Get all transaction data success",
          transactionsDetail
        );
      } else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {};

        if (endIndex < transactionsDetail.length) {
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
        result.transactions = transactionsDetail.slice(startIndex, endIndex);

        return sendSuccessResponse(
          res,
          200,
          "Get all transaction data page " + page,
          result
        );
      }
    } catch (error) {
      return sendErrorResponse(
        res,
        500,
        "Error to get transactions data",
        error
      );
    }
  },
  getDatabyID: async (req, res) => {
    try {
      let { id } = req.params;
      const userId = req.payload.id;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transaction data",
          new Error("Id not found or empty")
        );
      }

      if (!userId) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transaction data",
          new Error("You must login first to access this page(s).")
        );
      }

      const transactionDetail = await TransactionDetail.findById(id)
        .populate("_transactionId")
        .populate("_productId")
        .populate("_courierId")
        .populate("_courierServiceId");

      if (!transactionDetail) {
        return sendErrorResponse(
          res,
          400,
          "Failed to get transaction data",
          new Error("Transaction detail not found")
        );
      }

      return sendSuccessResponse(
        res,
        200,
        "Get transaction data success",
        transactionDetail
      );
    } catch (error) {
      return sendErrorResponse(
        res,
        500,
        "Error to get transaction data",
        error
      );
    }
  },
  updateData: async (req, res) => {
    try {
      let { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Id not found",
          new Error("Id not found or empty")
        );
      }

      const userId = req.payload.id;

      if (!userId) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("You must login first to access this page(s).")
        );
      }

      let {
        _transactionId,
        _productId,
        _courierId,
        _courierServiceId,
        _voucherId,
        qty,
      } = req.body;

      if (
        !_transactionId ||
        !_productId ||
        !_courierId ||
        !_courierServiceId ||
        !qty
      ) {
        return sendErrorResponse(
          res,
          400,
          "All fields required",
          new Error("All fields must be not empty")
        );
      }

      const product = await Product.findById(_productId);

      if (!product) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Product not found")
        );
      }

      const courierService = await CourierService.findById(_courierServiceId);

      if (!courierService) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Courier service not found")
        );
      }

      const oldTransactionDetail = await TransactionDetail.findById(id);

      if (!oldTransactionDetail) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Transaction detail not found")
        );
      }

      const subtotal = product.product_price * qty;

      let updateObject = {
        _transactionId,
        _productId,
        _courierId,
        _courierServiceId,
        qty,
        subtotal,
      };

      if (_voucherId) {
        updateObject._voucherId = _voucherId;
      } else {
        updateObject._voucherId = null;
      }

      const updatedTransactionDetail =
        await TransactionDetail.findByIdAndUpdate(id, updateObject, {
          new: true,
        });

      if (!updatedTransactionDetail) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Failed to update transaction detail")
        );
      }

      const transaction = await Transaction.findById(oldTransactionDetail._transactionId);

      if (!transaction) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Transaction not found")
        );
      }

      if (transaction._userId.toString() !== userId) {
        return sendErrorResponse(
          res,
          403,
          "Unauthorized",
          new Error("You are not authorized to access this page(s).")
        );
      }

      const allTransactionDetails = await TransactionDetail.find({
        _transactionId,
      });

      let total = allTransactionDetails.reduce(
        (total, detail) => total + detail.subtotal,
        0
      );

      if (_voucherId) {
        const discount = await Voucher.findById(_voucherId);
        if (discount) {
          total = total + courierService.cost - discount.discount;
        }
      } else {
        total = total + courierService.cost;
      }

      const updatedTransaction = await Transaction.findByIdAndUpdate(
        _transactionId,
        { total: total },
        { new: true }
      );

      if (!updatedTransaction) {
        return sendErrorResponse(
          res,
          400,
          "Failed to update transaction data",
          new Error("Failed to update transaction total")
        );
      }

      return sendSuccessResponse(
        res,
        200,
        "Update transaction data success",
        updatedTransactionDetail
      );
    } catch (error) {
      return sendErrorResponse(
        res,
        500,
        "Error to update transaction data",
        error
      );
    }
  },

  deleteData: async (req, res) => {
    try {
      let { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Failed to delete transaction data",
          new Error("Id not found or empty")
        );
      }

      const userId = req.payload.id;

      if (!userId) {
        return sendErrorResponse(
          res,
          400,
          "Failed to delete transaction data",
          new Error("You must login first to access this page(s).")
        );
      }

      const transactionDetail = await TransactionDetail.findById(id);

      if (!transactionDetail) {
        return sendErrorResponse(
          res,
          400,
          "Failed to delete transaction data",
          new Error("Transaction detail not found")
        );
      }

      const transaction = await Transaction.findById(
        transactionDetail._transactionId
      );

      if (!transaction) {
        return sendErrorResponse(
          res,
          400,
          "Failed to delete transaction data",
          new Error("Transaction not found")
        );
      }

      const total = transaction.total - transactionDetail.subtotal;

      await Transaction.findByIdAndUpdate(transactionDetail._transactionId, {
        total,
      });

      await TransactionDetail.findByIdAndDelete(id);

      return sendSuccessResponse(
        res,
        200,
        "Delete transaction data success",
        transactionDetail
      );
    } catch (error) {
      return sendErrorResponse(
        res,
        500,
        "Error to delete transaction data",
        error
      );
    }
  },
  addData: async (req, res) => {
    try {
      let {
        _transactionId,
        products,
        _courierId,
        _courierServiceId,
        _voucherId,
      } = req.body;
      let userId = req.payload.id;

      if (!_transactionId || !products || !_courierId || !_courierServiceId) {
        return sendErrorResponse(
          res,
          400,
          "All fields required",
          new Error("All fields must be not empty")
        );
      }

      if (!userId) {
        return sendErrorResponse(
          res,
          400,
          "Failed to add transaction data",
          new Error("You must login first to access this page(s).")
        );
      }

      const courierService = await CourierService.findById(_courierServiceId);

      if (!courierService) {
        return sendErrorResponse(
          res,
          400,
          "Failed to add transaction data",
          new Error("Courier service not found")
        );
      }

      let totalSubtotal = 0;
      let transactionDetails = [];

      for (let productData of products) {
        const product = await Product.findById(productData._productId);

        if (!product) {
          return sendErrorResponse(
            res,
            400,
            "Failed to add transaction data",
            new Error("Product not found")
          );
        }

        const subtotal = product.product_price * productData.qty;
        totalSubtotal += subtotal;

        const newTransactionDetail = await TransactionDetail.create({
          _transactionId,
          _productId: productData._productId,
          _courierId,
          _courierServiceId,
          _voucherId,
          qty: productData.qty,
          subtotal,
        });

        transactionDetails.push(newTransactionDetail);
      }

      const transaction = await Transaction.findById(_transactionId);

      if (!transaction) {
        return sendErrorResponse(
          res,
          400,
          "Failed to add transaction data",
          new Error("Transaction not found")
        );
      }

      let total = 0;

      if (_voucherId) {
        const discount = await Voucher.findById(_voucherId);
        if (discount) {
          total = totalSubtotal + courierService.cost - discount.discount;
        }
      } else {
        total = totalSubtotal + courierService.cost;
      }

      transaction.total = total;
      await transaction.save();

      return sendSuccessResponse(res, 200, "Add transaction data success", {
        transactionDetails,
        totalSubtotal,
        courierService: courierService.cost,
        total,
      });
    } catch (error) {
      return sendErrorResponse(
        res,
        500,
        "Error to add transaction data",
        error
      );
    }
  },
};
