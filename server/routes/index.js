const router = require("express").Router();
const courseRoutes = require("./courseRoutes");
const semesterRoutes = require("./semesterRoutes");

// API routes
router.use("/api/courses", courseRoutes);
router.use("/api/semesters", semesterRoutes);

module.exports = router;
