const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/api/products", (req, res) => {
  res.sendFile(__dirname + "/product.json");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
