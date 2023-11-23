const express = require("express");
const router = express.Router();

const productCategoryController = require("../../controllers/product/product.category.controller");
const { isAdmin, auth } = require("../../middleware/auth");

router.get("/", productCategoryController.getAllData);
router.get("/:id", productCategoryController.getDatabyID);
router.put("/:id", auth, isAdmin, productCategoryController.updateData);
router.delete("/:id", auth, isAdmin, productCategoryController.deleteData);
router.post("/", auth, isAdmin, productCategoryController.addData);

module.exports = router;
