const router = require("express").Router();
const orderController = require("../controller/orderController.js");

router.get("/id/:id", orderController.getorderById);
router.get("/:id", orderController.getorder);
router.get("/employe/:id", orderController.getMyOrdersEmployee);
router.post("/range/:id", orderController.getorderByDateRage);
router.post("/rangeemploye/:id", orderController.getorderByDateRageEmploye);
router.post("/", orderController.create);
router.put("/:id", orderController.updated);
router.delete("/:id", orderController.deleteByParams);

module.exports = router;
