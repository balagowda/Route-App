const mongoose = require("mongoose");

const DB = "mongodb://localhost:27017/userDB";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => {
    console.log("Connection Fail "+err.message);
  });