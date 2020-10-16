const Semester = require("../models/Semester");

module.exports = {
  findAll: async function (req, res) {
    try {
      const semesters = await Semester.find();
      res.json(semesters);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findById: async function (req, res) {
    try {
      const semester = await Semester.findById(req.params.id);
      res.json(semester);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  create: async function (req, res) {
    const newSemester = new Semester({
      name: req.body.name,
      completed: req.body.completed,
    });

    try {
      await newSemester.save();
      res.json("Semester created");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  update: async function (req, res) {
    try {
      await Semester.updateOne(
        { _id: req.params.id },
        { name: req.body.name, completed: req.body.completed }
      );
      res.json("Semester updated");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  delete: async function (req, res) {
    try {
      await Semester.deleteOne({ _id: req.params.id });
      res.json("Semester deleted");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
};
