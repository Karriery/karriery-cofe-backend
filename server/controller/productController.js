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
      var product = await productService.create({ ...req.body, quantity: 1 });
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
      const product = await productService.get(req.params.id);
      const updated = await productService.update(req.params.id, {
        ...req.body,
        quantity: product.quantity,
      });
      res.send(updated);
    } catch (next) {
      console.log(next);
    }
  },

  async updateQuantity(req, res, next) {
    try {
      const updated = await productService.update(req.params.id, {
        quantity: req.body.quantity,
      });
      res.send(updated);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
