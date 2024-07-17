const User = require("../model/userModel");
const Absensi = require("../model/absensiModel");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { nim, password } = req.body;
  try {
    const user = await User.findOne({ nim });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const newAbsensi = new Absensi({
      nim: user.nim,
      nama: user.nama,
      universitas: user.universitas,
    });
    await newAbsensi.save();
    res.status(200).json({ message: "Login Successfull", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  login,
};
