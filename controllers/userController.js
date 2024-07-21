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
  const { nim, nama, universitas, periodeMulai, periodeSelesai, password } =
    req.body;
  try {
    const checkUser = await User.findOne({ nim });
    if (checkUser) {
      return res.status(401).json({ message: "User already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      nim,
      nama,
      universitas,
      periodeMulai,
      periodeSelesai,
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

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nim, nama, universitas, periodeMulai, periodeSelesai, password } =
    req.body;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.nim = nim || user.nim;
    user.nama = nama || user.nama;
    user.universitas = universitas || user.universitas;
    user.periodeMulai = periodeMulai || user.periodeMulai;
    user.periodeSelesai = periodeSelesai || user.periodeSelesai;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  addData,
  deleteData,
  updateUser,
};
