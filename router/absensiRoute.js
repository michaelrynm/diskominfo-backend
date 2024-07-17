const express = require("express");
const router = express.Router();
const {
  login,
  getAllData,
  getRecent,
} = require("../controllers/absensiController");

router.post("/login", login);
router.get("/", getAllData);
router.get("/recent", getRecent);

module.exports = router;
