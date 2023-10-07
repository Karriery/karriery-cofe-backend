const router = require("express").Router();
const adminController = require("../controller/adminController.js");

router.get("/", adminController.getadmin);

router.delete(
  "/:id",

  adminController.deleteByParams
);
router.put(
  "/password/:id",

  adminController.updatedPassword
);

module.exports = router;
