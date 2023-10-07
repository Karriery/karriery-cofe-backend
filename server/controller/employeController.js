const employeService = require("../service/employeService.js");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  async getemploye(req, res, next) {
    try {
      var employe = await employeService.getAllEmploye(req.params.id);
      res.send(employe);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async getemployeById(req, res, next) {
    try {
      var employe = await employeService.getEmployeById(req.params.id);
      res.send(employe);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var employe = await employeService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      var employe = await employeService.update(req.params.id, req.body);
      res.send(employe);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async updatedPassword(req, res, next) {
    try {
      var employe = await employeService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
