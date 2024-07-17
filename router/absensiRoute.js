const express = require("express");
const router = express.Router();
const { login } = require("../controllers/absensiController");

router.post("/login", login);

module.exports = router;
