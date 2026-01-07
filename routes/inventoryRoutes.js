const express = require("express");
const router = express.Router();
const controller = require("../controllers/inventoryController");

router.post("/add", controller.addInventory);
router.get("/", controller.getInventory);
router.put("/update/:id", controller.updateInventory);
router.delete("/delete/:id", controller.deleteInventory);

module.exports = router;