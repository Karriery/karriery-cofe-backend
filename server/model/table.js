const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const TablesSchema = new mongoose.Schema(
  {
    number: String,
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Tables" },
  },
  {
    timestamps: true,
  }
);

const Tables = mongoose.model("Tables", TablesSchema);

module.exports = Tables;
