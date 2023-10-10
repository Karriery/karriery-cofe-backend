const historyService = require("../service/historyService.js");

module.exports = {
  async gethistory(req, res, next) {
    try {
      var history = await historyService.get(req.params.id);
      res.send(history);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async create(req, res, next) {
    try {
      var history = await historyService.create(req.body);
      res.send(history);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async gethistoryById(req, res, next) {
    try {
      var history = await historyService.getById(req.params.id);
      res.send(history);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var history = await historyService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      var history = await historyService.update(req.params.id, req.body);
      res.send(history);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
