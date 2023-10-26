const router = require("express").Router();
const cofeController = require("../controller/cofeController.js");
router.get("/:id", cofeController.getcofeById);
router.get("/available/:id", cofeController.getAvailable);
router.get("/archive/:id", cofeController.getArchive);
router.post("/", cofeController.create);
router.put("/:id", cofeController.updated);
router.delete("/:id", cofeController.deleteByParams);

module.exports = router;
