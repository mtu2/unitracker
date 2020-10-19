const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: Date,
  color: { type: String, required: true, default: "#ffffff" },
});

const ListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: Number, required: true },
  cards: [CardSchema],
});

module.exports = mongoose.model("List", ListSchema);

// EXAMPLE
// name: "TODO"
// order: 1
// cards: [{cardId}, {cardId}]
