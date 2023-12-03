const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  _productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  qty: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;