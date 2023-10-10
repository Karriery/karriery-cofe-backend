const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const HistorySchema = new mongoose.Schema(
  {
    time: String,
    action: String,
    employe: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Employe",
    },
    type: { type: String, default: "History" },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model("History", HistorySchema);

module.exports = History;
