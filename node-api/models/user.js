const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  mobileno: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
