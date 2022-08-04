const mongoose = require("mongoose");
const Category = require("./Category");
const Project = require("./Project");
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
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
