const ProductCategory = require("../../models/product/product.category");
const { sendSuccessResponse, sendErrorResponse } = require("../../helpers/response.helper");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const productCategories = await ProductCategory.find();
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      if (!page || !limit) {
        sendSuccessResponse(
          res,
          200,
          "Get all product categories success",
          productCategories
        );
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
        result.productCategories = productCategories.slice(startIndex, endIndex);

        sendSuccessResponse(
          res,
          200,
          "Get all product categories page " + page,
          result
        );
      }
      
    } catch (error) {
      sendErrorResponse(res, 500, "Error get all product categories", error);
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

      const productCategory = await ProductCategory.findById(id);
      sendSuccessResponse(
        res,
        200,
        "Get product category by id success",
        productCategory
      );
    } catch (error) {
      sendErrorResponse(res, 500, "Error get product category by id", error);
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

      let { category, description } = req.body;
      if (!category || !description) {
        return sendErrorResponse(
          res,
          400,
          "Category and description required",
          new Error("Category and description must be not empty")
        );
      }

      const updateProductCategory = await ProductCategory.findByIdAndUpdate(
        id,
        { category, description },
        { new: true }
      );
      sendSuccessResponse(
        res,
        200,
        "Update product category success",
        updateProductCategory
      );
    } catch (error) {
      sendErrorResponse(res, 500, "Error update product category", error);
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

      const productCategory = await ProductCategory.findByIdAndDelete(id);
      if (!productCategory) {
        return sendErrorResponse(
          res,
          400,
          "Product category not found",
          new Error("Product category not found")
        );
      }
      sendSuccessResponse(res, 200, "Delete product category success");
    } catch (error) {
      sendErrorResponse(res, 500, "Error delete product category", error);
    }
  },

  addData: async (req, res) => {
    try {
      let { category, description } = req.body;
      if (!category || !description) {
        return sendErrorResponse(
          res,
          400,
          "Category and description required",
          new Error("Category and description must be not empty")
        );
      }

      const newProductCategory = await ProductCategory.create({
        category,
        description,
      });
      sendSuccessResponse(
        res,
        200,
        "Add product category success",
        {_id : newProductCategory._id, ...newProductCategory._doc}
      );
    } catch (error) {
      sendErrorResponse(res, 500, "Error add product category", error);
    }
  },
};
