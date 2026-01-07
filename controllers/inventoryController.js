const Inventory = require("../models/inventoryModel");

// Add item
exports.addInventory = (req, res) => {
Inventory.addItem(req.body, (err, result) => {
if (err) return res.status(500).json(err);
res.json({ message: "Item added successfully" });
});
};

// Get items
exports.getInventory = (req, res) => {
Inventory.getItems((err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
};

// Update item
exports.updateInventory = (req, res) => {
Inventory.updateItem(req.params.id, req.body, (err) => {
if (err) return res.status(500).json(err);
res.json({ message: "Item updated successfully" });
});
};

// Delete item
exports.deleteInventory = (req, res) => {
Inventory.deleteItem(req.params.id, (err) => {
if (err) return res.status(500).json(err);
res.json({ message: "Item deleted successfully" });
});
};