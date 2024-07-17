const Admin = require("../model/adminModel");
const bcrpyt = require("bcrypt");

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
    const hashedPassword = await bcrpyt.hash(password, 10);
    const admin = await Admin.create({ username, password: hashedPassword });
    res.status(200).json({ message: "Admin created" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addData,
  getData,
};
