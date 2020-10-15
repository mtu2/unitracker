const mongoose = require("mongoose");

const SemesterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Semester", SemesterSchema);

// EXAMPLE
// name: "2020 Semester 2"
// completed: true
