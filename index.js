require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index");

const app = express();

const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/", router);

mongoose
  .connect(
    "mongodb+srv://michaelmarcelino:michaelrm27@cluster0.xp9s1xz.mongodb.net/Diskominfo?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed", err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});
module.exports = app;
