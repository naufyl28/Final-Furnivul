const express = require("express");
const router = express.Router({
  mergeParams: true,
});
const replyController = require("../../controllers/discuss/reply.controller");
const { isAdmin, auth } = require("../../middleware/auth");

router.get("/data", isAdmin, replyController.getAllReply);
router.get("/", replyController.getAllData);
router.get("/:id", replyController.getDatabyID);
router.put("/:id", auth, replyController.updateData);
router.delete("/:id", auth, replyController.deleteData);
router.post("/", auth, replyController.addData);

module.exports = router;
