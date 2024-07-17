const express = require("express");
const router = express.Router();
const { login, getAllData } = require("../controllers/absensiController");

router.post("/login", login);
router.get("/", getAllData);

module.exports = router;
