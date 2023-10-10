const router = require("express").Router();
const historyController = require("../controller/historyController.js");

router.get("/id/:id", historyController.gethistoryById);
router.get("/:id", historyController.gethistory);
router.post("/", historyController.create);
router.put("/:id", historyController.updated);
router.delete("/:id", historyController.deleteByParams);

module.exports = router;
