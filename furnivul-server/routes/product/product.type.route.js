const express = require("express");
const router = express.Router();

const productTypeController = require("../../controllers/product/product.type.controller");
const { isAdmin, auth } = require("../../middleware/auth");

router.get("/", productTypeController.getAllData);
router.get("/:id", productTypeController.getDatabyID);
router.put("/:id",auth, isAdmin, productTypeController.updateData);
router.delete("/:id",auth, isAdmin, productTypeController.deleteData);
router.post("/",auth, isAdmin, productTypeController.addData);

module.exports = router;
