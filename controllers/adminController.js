const Admin = require("../model/adminModel");
const bcrypt = require("bcrypt");

const getData = async (req, res) => {
  try {
    const admin = await Admin.find({});
    res.status(200).json({ data: admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addData = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ username, password: hashedPassword });
    res.status(200).json({ message: "Admin created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(402).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, admin.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid Password" });
    }
    res.status(200).json({ message: "Login Succesfull" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addData,
  getData,
  login,
};
