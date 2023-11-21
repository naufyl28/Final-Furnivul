const express = require("express");
const router = express.Router();

const userRouter = require("./user/user.route");
const authRouter = require("./auth/auth.route");
const courierRouter = require("./courier/courier.route");
const courierServiceRouter = require("./courier/courier.service.route");
const productCategoryRouter = require("./product/product.category.route");
const productTypeRouter = require("./product/product.type.route");
const productRouter = require("./product/product.route");
const reviewRouter = require("./review/review.route");
const discussRouter = require("./discuss/discuss.route.js");
const transactionRouter = require("./transactions/transaction.js");
const transactionDetailRouter = require("./transactions/transaction.detail.js");
const auth = require("../middleware/auth");


router.use("/auth", authRouter);
router.use("/users", auth, userRouter);
router.use("/courier-services", auth, courierServiceRouter)
router.use("/couriers", auth, courierRouter);
router.use("/product-categories", auth, productCategoryRouter);
router.use("/product-types", auth, productTypeRouter);
router.use("/products", productRouter);
router.use("/reviews", auth, reviewRouter);
router.use("/discusses", auth, discussRouter);
router.use("/transactions", auth, transactionRouter);
router.use("/transaction-details", auth, transactionDetailRouter);

module.exports = router;
