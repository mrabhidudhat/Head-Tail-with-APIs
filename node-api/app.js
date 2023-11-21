const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", require("./routes"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
