const cofeService = require("../service/cofeService.js");

module.exports = {
  async getAvailable(req, res, next) {
    try {
      var cofe = await cofeService.getAvailable(req.params.id);
      res.send(cofe);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async getArchive(req, res, next) {
    try {
      var cofe = await cofeService.getArchive(req.params.id);
      res.send(cofe);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async create(req, res, next) {
    try {
      var cofe = await cofeService.create({ ...req.body });
      res.send(cofe);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getcofeById(req, res, next) {
    try {
      var cofe = await cofeService.getById(req.params.id);
      res.send(cofe);
    } catch (next) {
      console.log(next);
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var cofe = await cofeService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      const updated = await cofeService.update(req.params.id, {
        ...req.body,
      });
      res.send(updated);
    } catch (next) {
      console.log(next);
    }
  },
};
