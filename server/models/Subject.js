const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  grade: { type: Number, required: true },
});

module.exports = mongoose.Model("Subject", SubjectSchema);

// EXAMPLE
// code: "ECON30019",
// name: "Behavioural Economics",
// semester: {
//   name: "2020 Semester 2",
//   completed: false
// },
// course: {
//   name: "Economics",
//   color: "#abcdef"
// },
// grade: 82,

// const DUMMY_DATA = [
//   {
//     termName: "2020 Semester 2",
//     completed: false,
//     semesterWAM: 79.75,
//     subjects: [
//       {
//         subjectCode: "ECON30019",
//         subjectName: "Behavioural Economics",
//         courseName: "Economics",
//         grade: 82,
//       },
//       {
//         subjectCode: "FNCE30007",
//         subjectName: "Derivative Securities",
//         courseName: "Finance",
//         grade: 91,
//       },
//       {
//         subjectCode: "MAST30027",
//         subjectName: "Modern Applied Statistics",
//         courseName: "Statistics",
//         grade: 76,
//       },
//       {
//         subjectCode: "MAST30001",
//         subjectName: "Stochastic Modelling",
//         courseName: "Statistics",
//         grade: 70,
//       },
//     ],
//   },
//   {
//     termName: "2020 Semester 1",
//     completed: true,
//     semesterWAM: 84,
//     subjects: [
//       {
//         subjectCode: "ECOM30001",
//         subjectName: "Basic Econometrics",
//         courseName: "Economics",
//         grade: 90,
//       },
//       {
//         subjectCode: "ECON30020",
//         subjectName: "Mathematical Economics",
//         courseName: "Economics",
//         grade: 95,
//       },
//       {
//         subjectCode: "MKTG20001",
//         subjectName: "Consumer Behaviour",
//         courseName: "Commerce Elective",
//         grade: 70,
//       },
//       {
//         subjectCode: "MAST30025",
//         subjectName: "Linear Statistical Models",
//         courseName: "Statistics",
//         grade: 81,
//       },
//     ],
//   },
//   {
//     termName: "2020 Semester 1",
//     completed: true,
//     semesterWAM: 99,
//     subjects: [
//       {
//         subjectCode: "COMP10001",
//         subjectName: "Foundations of Computing",
//         courseName: "Breadth",
//         grade: 99.0,
//       },
//     ],
//   },
// ];
