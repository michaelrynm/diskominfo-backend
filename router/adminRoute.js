const express = require("express");
const router = express.Router();
const { getData, addData, login } = require("../controllers/adminController");

router.get("/", getData);
router.post("/create", addData);
router.post("/login", login);

module.exports = router;
