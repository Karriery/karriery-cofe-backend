var Cofe = require("../model/cofe.js");

module.exports = new (class CofeService {
  create(data) {
    console.log(data);
    return Cofe.create(data);
  }
  getById(id) {
    return Cofe.findOne({ _id: id }).populate("opened_by empty_by");
  }
  getAvailable(id) {
    return Cofe.find({
      admin: id,
      $or: [{ status: "closed" }, { status: "open" }],
    });
  }

  getArchive(id) {
    return Cofe.find({
      admin: id,
      status: "empty",
    });
  }

  delete(id) {
    return Cofe.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Cofe.findOneAndUpdate({ _id: _id }, data);
  }
})();
