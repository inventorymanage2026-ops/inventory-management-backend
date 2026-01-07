const db = require("./models/db");
// Import required libraries
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend requests
app.use(express.json()); // Read JSON data

const inventoryRoutes = require("./routes/inventoryRoutes");
app.use("/api/inventory", inventoryRoutes);

// Test route
app.get("/", (req, res) => {
res.send("Inventory Management Backend Running");
});

// Server port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});

const excelRoutes = require("./routes/excelRoutes");
app.use("/api/excel", excelRoutes);