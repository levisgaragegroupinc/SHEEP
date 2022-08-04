const { Schema } = require("mongoose");

// schema for the User's projects `fundedHistory` array in User.js
const projectSchema = new Schema({
  projectId: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
  },
  projectLink: {
    type: String,
  },
});

module.exports = projectSchema;
