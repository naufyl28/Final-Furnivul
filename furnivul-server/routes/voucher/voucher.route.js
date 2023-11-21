const express = require("express");
const router = express.Router();

const voucherController = require("../../controllers/voucher/voucher.controller.js");

router.get("/", voucherController.getAllData);
router.get("/:id", voucherController.getDatabyID);
router.put("/:id", voucherController.updateData);
router.delete("/:id", voucherController.deleteData);
router.post("/", voucherController.addData);

module.exports = router;