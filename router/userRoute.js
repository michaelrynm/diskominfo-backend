const express = require("express");
const router = express.Router();
const {
  getAll,
  addData,
  deleteData,
} = require("../controllers/userController");

router.get("/", getAll);
router.post("/create", addData);
router.delete("/:id", deleteData);

module.exports = router;
