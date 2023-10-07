var Order = require("../model/order.js");

module.exports = new (class OrderService {
  create(data) {
    return Order.create(data);
  }
  getById(id) {
    return Order.findOne({ _id: id });
  }
  get(id) {
    return Order.find({ admin: id });
  }
  getByEmploye(id) {
    return Order.find({ employe: id });
  }
  getByRange(startDate, endDate, admin) {
    return Order.find({
      admin,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });
  }
  getByRangeEmp(startDate, endDate, employe) {
    return Order.find({
      employe,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });
  }
  delete(id) {
    return Order.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Order.findOneAndUpdate({ _id: _id }, data);
  }
})();
