const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const CofeSchema = new mongoose.Schema(
  {
    name: String,
    prix: Number,
    quantity: { type: Number, default: 85 },
    real_quantity: { type: Number, default: 0 },
    status: { type: String, default: "closed" },
    opened_at: String,
    empty_at: String,
    opened_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Employe",
    },
    empty_by: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Employe",
    },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Cofe" },
  },
  {
    timestamps: true,
  }
);

const Cofe = mongoose.model("Cofe", CofeSchema);

module.exports = Cofe;
