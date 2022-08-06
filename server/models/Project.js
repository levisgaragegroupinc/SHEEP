const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const Category = require("./Category");
const Product = require("./Product");

// schema for the User's projects array in User.js
const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
