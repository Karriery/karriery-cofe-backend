var Product = require("../model/product.js");

module.exports = new (class ProductService {
  create(data) {
    return Product.create(data);
  }
  getById(id) {
    return Product.findOne({ _id: id });
  }
  get(id) {
    return Product.find({ admin: id });
  }
  delete(id) {
    return Product.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Product.findOneAndUpdate({ _id: _id }, data);
  }
})();
