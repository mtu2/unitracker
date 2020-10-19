const router = require("express").Router();
const listRoutes = require("./listRoutes");

// API routes
router.use("/api/lists", listRoutes);

module.exports = router;
