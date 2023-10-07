const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const EmployeSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
    },
    type: { type: String, default: "Employe" },
  },
  {
    timestamps: true,
  }
);

const Employe = mongoose.model("Employe", EmployeSchema);

module.exports = Employe;
