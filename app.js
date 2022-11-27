require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.set("view engine", "ejs");

const db = mongoose.connect(process.env.MONGO_URI, () => console.log("DB Connected."));

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT, () => console.log(`Server started in port ${process.env.PORT}`));
