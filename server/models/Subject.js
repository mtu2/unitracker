const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  grade: { type: Number, required: true },
});

module.exports = mongoose.model("Subject", SubjectSchema);
