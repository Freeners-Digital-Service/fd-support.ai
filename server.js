require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "FD Support AI Backend Running ✅",
    brand: "Freener's Digital Services"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});