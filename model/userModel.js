const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nim: {
    type: Number,
    required: true,
    unique: true,
  },
  nama: {
    type: String,
    required: true,
  },
  universitas: {
    type: String,
    required: true,
  },
  periode: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
