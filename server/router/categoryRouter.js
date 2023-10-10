const router = require("express").Router();
const categoryController = require("../controller/categoryController.js");

router.get("/id/:id", categoryController.getcategoryById);
router.get("/:id", categoryController.getcategory);
router.post("/", categoryController.create);
router.put("/:id", categoryController.updated);
router.delete("/:id", categoryController.deleteByParams);

module.exports = router;
