const express = require("express");
const router = express.Router();

const cartController = require("../../controllers/cart/cart.controller.js");

router.get("/", cartController.getAllData);
router.get("/:id", cartController.getDatabyID);
router.put("/:id", cartController.updateData);
router.delete("/:id", cartController.deleteData);
router.post("/", cartController.addData);

module.exports = router;