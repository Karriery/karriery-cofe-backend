var Category = require("../model/category.js");

module.exports = new (class CategoryService {
  create(data) {
    return Category.create(data);
  }
  getById(id) {
    return Category.findOne({ _id: id });
  }
  get(id) {
    return Category.find({ admin: id });
  }
  delete(id) {
    return Category.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Category.findOneAndUpdate({ _id: _id }, data);
  }
})();
