const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const CategorySchema = new mongoose.Schema(
  {
    name: String,
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Category" },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
