const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const OrderSchema = new mongoose.Schema(
  {
    order: String,
    total: Number,
    table: String,
    employe: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Employe",
    },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Order" },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
