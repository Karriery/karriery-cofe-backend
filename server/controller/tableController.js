const tableService = require("../service/tableService.js");

module.exports = {
  async gettable(req, res, next) {
    try {
      var table = await tableService.get(req.params.id);
      res.send(table);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async create(req, res, next) {
    try {
      var table = await tableService.create(req.body);
      res.send(table);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async gettableById(req, res, next) {
    try {
      var table = await tableService.getById(req.params.id);
      res.send(table);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var table = await tableService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async updated(req, res, next) {
    try {
      var table = await tableService.update(req.params.id, req.body);
      res.send(table);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updateByOrderId(req, res, next) {
    try {
      console.log(req.body);
      var table = await tableService.updateByOrderId(req.params.id, req.body);
      res.send(table);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
