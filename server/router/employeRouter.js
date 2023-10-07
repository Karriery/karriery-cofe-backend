const router = require("express").Router();
const employeController = require("../controller/employeController.js");

router.get("/id/:id", employeController.getemployeById);
router.get("/:id", employeController.getemploye);
router.put("/:id", employeController.updated);
router.delete("/:id", employeController.deleteByParams);
router.put("/password/:id", employeController.updatedPassword);

module.exports = router;
