const express = require("express");
const userRouter = require("../router/userRoute"),
  adminRouter = require("./adminRoute"),
  absensiRouter = require("./absensiRoute"),
  router = express.Router();

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/absensi", absensiRouter);

module.exports = router;
