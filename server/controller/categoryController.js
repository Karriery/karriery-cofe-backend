const categoryService = require("../service/categoryService.js");

module.exports = {
  async getcategory(req, res, next) {
    try {
      var category = await categoryService.get(req.params.id);
      res.send(category);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async create(req, res, next) {
    try {
      var category = await categoryService.create(req.body);
      res.send(category);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getcategoryById(req, res, next) {
    try {
      var category = await categoryService.getById(req.params.id);
      res.send(category);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var category = await categoryService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      var category = await categoryService.update(req.params.id, req.body);
      res.send(category);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
