const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "" },
  channels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Channel" }]
});

module.exports = mongoose.model("User", userSchema);
