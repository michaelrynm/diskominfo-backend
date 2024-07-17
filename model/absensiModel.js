const mongoose = require("mongoose");

const absensiSchema = mongoose.Schema({
  nim: {
    type: Number,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  universitas: {
    type: String,
    required: true,
  },
  waktuAbsensi: {
    type: Date,
    default: Date.now,
  },
});

const Absensi = mongoose.model("Absensi", absensiSchema);
module.exports = Absensi;
