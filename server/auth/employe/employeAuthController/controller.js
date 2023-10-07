const employeService = require("../../../service/employeService.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async signUpemploye(req, res) {
    try {
      if (!req.body.password || !req.body.username) {
        res.send({ msg: false });
      }
      var employe = await employeService.getEmployeByUsername(
        req.body.username
      );
      console.log(req.body);
      if (employe) {
        res.send({ msg: "user already exist" });
      } else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
          var employe = req.body;
          employe.password = hash;
          var a = await employeService.signup(employe);
          var token = jwt.sign({ id: a._id }, "sa7fa leblebi");
          res.send({ msg: true });
        });
      }
    } catch {
      res.send("get error ");
    }
  },
  async login(req, res) {
    try {
      var employe = await employeService.getEmployeByUsername(
        req.body.username
      );
      if (employe) {
        bcrypt.compare(req.body.password, employe.password, (err, result) => {
          if (result) {
            var token = jwt.sign({ id: employe._id }, "sa7fa leblebi");
            var access_token = jwt.sign({ id: employe._id }, "halelews");
            res.send({ token, user: employe });
          } else {
            res.status(401).json({ msg: "wrong password" });
          }
        });
      } else {
        res.status(401).json({ msg: "wrong UsermagetEmployeByUsername" });
      }
    } catch {
      res.send("get error ");
    }
  },
  async verify(req, res) {
    try {
      if (!req.body.token) {
        res.send({ msg: false });
      }
      var objId = jwt.verify(req.body.token, "sa7fa leblebi");
      var employe = await employeService
        .getemployeById(objId.id)
        .populate("wallet");
      if (employe) {
        res.send(employe);
      } else {
        res.send({ msg: false });
      }
    } catch {
      res.send("get error ");
    }
  },
};
