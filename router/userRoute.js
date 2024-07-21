const express = require("express");
const router = express.Router();
const {
  getAll,
  addData,
  deleteData,
  updateUser,
} = require("../controllers/userController");

router.get("/", getAll);
router.post("/create", addData);
router.delete("/:id", deleteData);
router.put("/:id", updateUser);

module.exports = router;
