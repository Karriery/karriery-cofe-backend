var History = require("../model/history.js");

module.exports = new (class HistoryService {
  create(data) {
    return History.create(data);
  }
  getById(id) {
    return History.findOne({ _id: id });
  }
  get(id) {
    return History.find({ employe: id });
  }
  delete(id) {
    return History.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return History.findOneAndUpdate({ _id: _id }, data);
  }
})();
