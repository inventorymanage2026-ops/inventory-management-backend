const XLSX = require("xlsx");
const db = require("../models/db");

exports.uploadExcel = (req, res) => {
if (!req.file) {
return res.status(400).json({ message: "No file uploaded" });
}

const workbook = XLSX.readFile(req.file.path);
const sheetName = workbook.SheetNames[0];
const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

sheetData.forEach((item) => {
const sql =
"INSERT INTO inventory (item_name, category, quantity, price) VALUES (?, ?, ?, ?)";
db.query(sql, [
item.item_name,
item.category,
item.quantity,
item.price,
]);
});

res.json({ message: "Excel data uploaded successfully" });
};