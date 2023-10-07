const router = require("express").Router();
const productController = require("../controller/productController.js");

router.get("/id/:id", productController.getproductById);
router.get("/:id", productController.getproduct);
router.post("/", productController.create);
router.put("/:id", productController.updated);
router.delete("/:id", productController.deleteByParams);

module.exports = router;
