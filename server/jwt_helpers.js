const jwt = require("jsonwebtoken");
var createError = require("http-errors");
const coachService = require("./service/coachService.js");
const adminService = require("./service/adminService.js");
const userService = require("./service/userService.js");

module.exports = {
  verifyAccessToken: (roles) => async (req, res, next) => {
    // return;
    if (!req.header("authorization")) {
      return next(createError.Unauthorized());
    }
    var token = req.header("authorization").split(" ")[1];
    var p = jwt.verify(token, "halelews");

    if (p.id) {
      var user = (await userService.getUserById(p.id)) || {};
      var coach = (await coachService.getCoachById(p.id)) || {};
      var admin = (await adminService.getAdminById(p.id)) || {};
      if (
        roles.includes(user.type) ||
        roles.includes(coach.type) ||
        roles.includes(admin.type)
      ) {
        req.payload = p;
        next();
      } else {
        return next(createError.Unauthorized());
      }
    }
  },
};
