require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes/app");

const mongoString = process.env.DATABASE_URL;
const app = express(); // additing express funciton

app.use(express.json()); //middlevar for conncting
app.use("/api", routes);

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (err) => console.log(err));
database.on("connected", () => console.log("database connected"));

app.get("/", (req, res) => {
  console.log("this is API call");
  res.send("string");
});

app.listen(3000, () => {
  console.log("Server start at localhost :3000");
});
