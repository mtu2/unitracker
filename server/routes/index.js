const router = require("express").Router();
const courseRoutes = require("./courseRoutes");
const semesterRoutes = require("./semesterRoutes");
const subjectRoutes = require("./subjectRoutes");

// API routes
router.use("/api/courses", courseRoutes);
router.use("/api/semesters", semesterRoutes);
router.use("/api/subjects", subjectRoutes);

module.exports = router;
