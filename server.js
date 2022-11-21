const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

// INITIAL-ROUTE (BOSHLANG'ICH-YO'L)
app.use("/api", require("./routes"));

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
