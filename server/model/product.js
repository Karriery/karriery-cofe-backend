const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    photo: String,
    prix: Number,
    quantifiable: { type: Boolean, default: true },
    category: { type: String, default: "coffe" },
    quantity: { type: Number, default: 0 },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Product" },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
