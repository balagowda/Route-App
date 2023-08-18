require("dotenv").config();
const express = require("express");
const app = express();
require('./db/connection')
const cors = require('cors');
const router = require('./routes/router');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(router);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(8000, (req, res) => {
  console.log("Server Started");
});