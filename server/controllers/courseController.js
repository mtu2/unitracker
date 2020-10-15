const Course = require("../models/Course");

module.exports = {
  findAll: async function (req, res) {
    try {
      const courses = await Course.find();
      res.json(courses);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findById: async function (req, res) {
    try {
      const course = await Course.findById(req.params.id);
      res.json(course);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  create: async function (req, res) {
    const name = req.body.name;
    const color = req.body.color;
    const newCourse = new Course({ name, color });

    try {
      await newCourse.save();
      res.json("Course added");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  update: async function (req, res) {
    try {
      await Course.updateOne(
        { _id: req.params.id },
        { name: req.body.name, color: req.body.color }
      );
      res.json("Course updated");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  delete: async function (req, res) {
    try {
      await Course.deleteOne({ _id: req.params.id });
      res.json("Course deleted");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
};
