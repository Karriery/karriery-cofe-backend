const orderService = require("../service/orderService.js");

module.exports = {
  async getorder(req, res, next) {
    try {
      var order = await orderService.get(req.params.id).populate("employe");
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async getMyOrdersEmployee(req, res, next) {
    try {
      var order = await orderService
        .getByEmploye(req.params.id)
        .populate("employe");
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async getorderByDateRage(req, res, next) {
    try {
      var order = await orderService
        .getByRange(
          new Date(req.body.start),
          new Date(req.body.end),
          req.params.id
        )
        .populate("employe");
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getorderByDateRageEmploye(req, res, next) {
    try {
      var order = await orderService
        .getByRangeEmp(
          new Date(req.body.start),
          new Date(req.body.end),
          req.params.id
        )
        .populate("employe");
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async create(req, res, next) {
    try {
      var order = await orderService.create(req.body);
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async getorderById(req, res, next) {
    try {
      var order = await orderService.getById(req.params.id).populate("employe");
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async deleteByParams(req, res, next) {
    try {
      var order = await orderService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
  async updated(req, res, next) {
    try {
      var order = await orderService.update(req.params.id, req.body);
      res.send(order);
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
