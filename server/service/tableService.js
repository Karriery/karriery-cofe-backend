var Table = require("../model/table");

module.exports = new (class TableService {
  create(data) {
    return Table.create(data);
  }
  getById(id) {
    return Table.findOne({ _id: id });
  }
  get(id) {
    return Table.find({ admin: id });
  }
  delete(id) {
    return Table.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Table.findOneAndUpdate({ _id: _id }, data);
  }
  updateByOrderId(_id, data) {
    return Table.findOneAndUpdate({ order: _id }, data);
  }
})();
