const mongoose = require("mongoose");
const { Schema } = require("mongoose");

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
});

const Project = mongoose.model("Project", projectSchema);

module.exports = projectSchema;
