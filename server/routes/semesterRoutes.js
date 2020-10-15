const router = require("express").Router();
const semesterController = require("../controllers/semesterController");

router
  .route("/")
  .get(semesterController.findAll)
  .post(semesterController.create);

router
  .route("/:id")
  .get(semesterController.findById)
  .put(semesterController.update)
  .delete(semesterController.delete);

module.exports = router;
