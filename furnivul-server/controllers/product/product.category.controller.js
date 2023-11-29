const ProductCategory = require("../../models/product/product.category");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../../helpers/response.helper");
const Role = require("../../models/role/role");
const Product = require("../../models/product/product");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const productCategories = await ProductCategory.find();
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!page || !limit) {
        if (productCategories.length === 0) {
          return sendSuccessResponse(
            res,
            200,
            "Success",
            "Product category is empty"
          );
        }

        sendSuccessResponse(res, 200, "Success", productCategories);
      } else {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = {};

        if (endIndex < productCategories.length) {
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
        result.productCategories = productCategories.slice(
          startIndex,
          endIndex
        );

        sendSuccessResponse(
          res,
          200,
          "Get all product categories page " + page,
          result
        );
      }
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  getDatabyID: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Id not found or empty")
        );
      }

      const products = await Product.find({ _categoryId: id });
      if (products.length === 0) {
        return sendSuccessResponse(
          res,
          200,
          "Success",
          "Product category is empty"
        );
      }

      if (!products) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Product category not found")
        );
      }

      sendSuccessResponse(res, 200, "Success", products);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  updateData: async (req, res) => {
    try {
      const role = req.payload.role;

      const checkRole = await Role.findById(role);
      if (checkRole.role !== "admin") {
        return sendErrorResponse(
          res,
          401,
          "Unauthorized",
          new Error("You are not admin")
        );
      }

      let { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Id not found or empty")
        );
      }

      let { category, description } = req.body;
      if (!category || !description) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Category and description must be not empty")
        );
      }

      const updateProductCategory = await ProductCategory.findByIdAndUpdate(
        id,
        { category, description },
        { new: true }
      );

      if (!updateProductCategory) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Product category not found")
        );
      }

      sendSuccessResponse(res, 200, "Success", updateProductCategory);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  deleteData: async (req, res) => {
    try {
      const role = req.payload.role;

      const checkRole = await Role.findById(role);
      if (checkRole.role !== "admin") {
        return sendErrorResponse(
          res,
          401,
          "Unauthorized",
          new Error("You are not admin")
        );
      }

      const { id } = req.params;

      if (!id) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Id not found or empty")
        );
      }

      const productCategory = await ProductCategory.findByIdAndDelete(id);
      if (!productCategory) {
        return sendErrorResponse(
          res,
          404,
          "Not found",
          new Error("Product category not found")
        );
      }
      sendSuccessResponse(res, 200, "Success");
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },

  addData: async (req, res) => {
    try {
      const role = req.payload.role;

      const checkRole = await Role.findById(role);
      if (checkRole.role !== "admin") {
        return sendErrorResponse(
          res,
          401,
          "Unauthorized",
          new Error("You are not admin")
        );
      }

      let { category, description } = req.body;
      if (!category || !description) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Category and description must be not empty")
        );
      }

      const checkCategory = await ProductCategory.find({ category });
      if (checkCategory.length > 0) {
        return sendErrorResponse(
          res,
          400,
          "Bad request",
          new Error("Category already exist")
        );
      }

      const newProductCategory = await ProductCategory.create({
        category,
        description,
      });
      sendSuccessResponse(res, 200, "Success", newProductCategory);
    } catch (error) {
      sendErrorResponse(res, 500, "Internal server error", error);
    }
  },
};
