const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: String},
  username: { type: String, unique: true },
  password: String,
  name: { type: String, required: false },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
