const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const getAll = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ data: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addData = async (req, res) => {
  const { nim, nama, universitas, periode, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      nim,
      nama,
      universitas,
      periode,
      password: hashedPassword,
    });
    res.status(200).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  addData,
  deleteData,
};
