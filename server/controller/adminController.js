const adminService = require("../service/adminService.js");

module.exports = {
  async getadmin(req, res, next) {
    try {
      var admin = await adminService.getAllAdmin();
      res.send(admin);
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async deleteByParams(req, res, next) {
    try {
      var admin = await adminService.delete(req.params.id);
      res.send({ msg: "deleted" });
    } catch (next) {
      res.status(401).json(next);
    }
  },

  async updatedPassword(req, res, next) {
    try {
      var admin = await adminService.updatePassword(
        req.params.id,
        req.body.password
      );
      res.send({ msg: "updated" });
    } catch (next) {
      res.status(401).json(next);
    }
  },
};
