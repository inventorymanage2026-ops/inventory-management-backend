const db = require("./db");

// Add inventory item
exports.addItem = (data, callback) => {
const sql =
"INSERT INTO inventory (item_name, category, quantity, price) VALUES (?, ?, ?, ?)";
db.query(
sql,
[data.item_name, data.category, data.quantity, data.price],
callback
);
};

// Get all inventory items
exports.getItems = (callback) => {
db.query("SELECT * FROM inventory", callback);
};

// Update inventory item
exports.updateItem = (id, data, callback) => {
const sql =
"UPDATE inventory SET item_name=?, category=?, quantity=?, price=? WHERE id=?";
db.query(
sql,
[data.item_name, data.category, data.quantity, data.price, id],
callback
);
};

// Delete inventory item
exports.deleteItem = (id, callback) => {
db.query("DELETE FROM inventory WHERE id=?", [id], callback);
};