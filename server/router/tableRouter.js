const router = require("express").Router();
const tableController = require("../controller/tableController.js");

router.get("/id/:id", tableController.gettableById);
router.get("/:id", tableController.gettable);
router.post("/", tableController.create);
router.put("/:id", tableController.updated);
router.delete("/:id", tableController.deleteByParams);

module.exports = router;
