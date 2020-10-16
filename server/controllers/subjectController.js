const Subject = require("../models/Subject");

module.exports = {
  findAll: async function (req, res) {
    try {
      // Find all and populate semester and courses
      const subjects = await Subject.find()
        .populate("semester")
        .populate("course");
      res.json(subjects);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findById: async function (req, res) {
    try {
      // Find one and populate semester and course
      const subject = await Subject.findById(req.params.id)
        .populate("semester")
        .populate("course");
      res.json(subject);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findBySemesterId: async function (req, res) {
    try {
      // Find all and popualte semester and course
      const subjects = await Subject.find({ semester: req.params.id })
        .populate("semester")
        .populate("course");
      res.json(subjects);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findByCourseId: async function (req, res) {
    try {
      // Find all and populate semester and course
      const subjects = await Subject.find({ course: req.params.id })
        .populate("semester")
        .populate("course");
      res.json(subjects);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  create: async function (req, res) {
    const newSubject = new Subject({
      code: req.body.code,
      name: req.body.name,
      semester: req.body.semester,
      course: req.body.course,
      grade: req.body.grade,
    });

    try {
      await newSubject.save();
      res.json("Subject created");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  update: async function (req, res) {
    try {
      await Subject.updateOne(
        { _id: req.params.id },
        {
          code: req.body.code,
          name: req.body.name,
          semester: req.body.semester,
          course: req.body.course,
          grade: req.body.grade,
        }
      );
      res.json("Subject updated");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  delete: async function (req, res) {
    try {
      await Subject.deleteOne({ _id: req.params.id });
      res.json("Subject deleted");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
};

// code: { type: String, required: true },
// name: { type: String, required: true },
// semester: { type: mongoose.Schema.Types.ObjectId, ref: "Semester" },
// course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
// grade: { type: Number, required: true },
