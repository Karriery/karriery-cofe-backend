var Employe = require("../model/employe.js");

module.exports = new (class EmployeService {
  signup(data) {
    return Employe.create(data);
  }
  createWallet(data) {
    return Wallet.create(data);
  }
  getEmployeById(id) {
    return Employe.findOne({ _id: id });
  }
  getEmployeByUsername(username) {
    return Employe.findOne({ username: username });
  }
  getAllEmploye(id) {
    return Employe.find({ admin: id });
  }
  delete(id) {
    return Employe.findOneAndDelete({ _id: id });
  }
  update(_id, data) {
    return Employe.findOneAndUpdate({ _id: _id }, data);
  }
  updatePassword(_id, newpassword) {
    return Employe.findOneAndUpdate({ _id: _id }, { password: newpassword });
  }
})();
