const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, default: "#000000" },
});

module.exports = mongoose.model("Course", CourseSchema);

// EXAMPLE
// name: Economics
// color: "#abcdef"
