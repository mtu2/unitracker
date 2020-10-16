const router = require("express").Router();
const subjectController = require("../controllers/subjectController");

router.route("/").get(subjectController.findAll).post(subjectController.create);

router
  .route("/:id")
  .get(subjectController.findById)
  .put(subjectController.update)
  .delete(subjectController.delete);

router.route("/semesters/:id").get(subjectController.findBySemesterId);
router.route("/courses/:id").get(subjectController.findByCourseId);

module.exports = router;
