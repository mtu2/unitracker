const router = require("express").Router();
const listController = require("../controllers/listController");

// List API routes
router.route("/").get(listController.findAll).post(listController.create);
router
  .route("/:id")
  .get(listController.findById)
  .put(listController.update)
  .delete(listController.delete);

// Card API routes
router.route("/:id/cards").post(listController.createCard);
router
  .route("/:id/cards/:cardId")
  .get(listController.findCardById)
  .put(listController.updateCard)
  .delete(listController.deleteCard);
router.route("/:id/cards/:index").delete(listController.deleteCardByIndex);

module.exports = router;
