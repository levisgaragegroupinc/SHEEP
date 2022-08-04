const mongoose = require("mongoose");
const { Schema } = mongoose;

// import schema from Projects.js
const projectSchema = require("./Projects");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
