const List = require("../models/List");

module.exports = {
  // List API functions
  findAll: async function (req, res) {
    try {
      const lists = await List.find();
      res.json(lists);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  findById: async function (req, res) {
    try {
      const list = await List.findById(req.params.id);
      res.json(list);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  create: async function (req, res) {
    const newList = new List({
      name: req.body.name,
      order: req.body.order,
    });

    try {
      await newList.save();
      res.json("List created");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  update: async function (req, res) {
    try {
      await List.updateOne(
        { _id: req.params.id },
        { name: req.body.name, order: req.body.order, cards: req.body.cards }
      );
      res.json("List updated");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  delete: async function (req, res) {
    try {
      await List.deleteOne({ _id: req.params.id });
      res.json("List deleted");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },

  // Card API functions
  findCardById: async function (req, res) {
    try {
      const list = await List.findById(req.params.id);
      const card = list.cards.id(req.params.cardId);
      res.json(card);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  createCard: async function (req, res) {
    const newCard = {
      subject: req.body.subject,
      description: req.body.description,
      dueDate: req.body.dueDate,
      color: req.body.color,
    };
    try {
      const list = await List.findById(req.params.id);
      list.cards.push(newCard);
      const newList = await list.save();
      res.json(newList.cards);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  updateCard: async function (req, res) {
    const updatedCard = {
      subject: req.body.subject,
      description: req.body.description,
      dueDate: req.body.dueDate,
      color: req.body.color,
    };
    try {
      const newList = await List.findOneAndUpdate(
        { _id: req.params.id, "cards._id": req.params.cardId },
        { $set: { "cards.$": updatedCard } },
        { new: true } // new = true, returns updated result
      );
      res.json(newList.cards);
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
  deleteCard: async function (req, res) {
    try {
      const list = await List.findById(req.params.id);
      list.cards.remove(req.params.cardId);
      await list.save();
      res.json("Card deleted from list");
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  },
};
