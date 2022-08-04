const mongoose = require("mongoose");
const Product = require("./Product");
const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
