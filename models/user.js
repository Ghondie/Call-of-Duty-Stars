const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isLoggedIn: { type: Boolean, required: true, default: false}
});

const User = mongoose.model("User", userSchema);

module.exports = User;
