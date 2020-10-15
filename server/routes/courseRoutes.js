const router = require("express").Router();
const courseController = require("../controllers/courseController");

router.route("/").get(courseController.findAll).post(courseController.create);

router
  .route("/:id")
  .get(courseController.findById)
  .put(courseController.update)
  .delete(courseController.delete);

module.exports = router;
