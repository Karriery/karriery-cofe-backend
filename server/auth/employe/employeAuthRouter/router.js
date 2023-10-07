const router = require("express").Router();
const employeController = require("../employeAuthController/controller.js");

router.post("/signup", employeController.signUpemploye);
router.post("/signin", employeController.login);
router.post("/verify", employeController.verify);

module.exports = router;
