const productService = require("../service/productService.js");

module.exports = {
  async getproduct(req, res, next) {
    try {
      var product = await productService.get(req.params.id);
      res.send(product);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async create(req, res, next) {
    try {
      var product = await productService.create(req.body);
      res.send(product);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getproductById(req, res, next) {
    try {
      var product = await productService.getById(req.params.id);
      res.send(product);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var product = await productService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      var product = await productService.update(req.params.id, req.body);
      res.send(product);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
