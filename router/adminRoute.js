const express = require("express");
const router = express.Router();
const { getData, addData } = require("../controllers/adminController");

router.get("/", getData);
router.post("/create", addData);

module.exports = router;
