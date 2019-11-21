const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://said:955hq3y1qH1mudS6@cluster0-my0wk.mongodb.net/test?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Connected successfuly");
  })
  .catch(err => {
    console.log("Failed to connect");
  });
const bodyParser = require("body-parser");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/login", (req, res, next) => {
  const users = [
    {
      id: "aaaa",
      email: "yyy",
      password: "zzz"
    },
    {
      id: "aa222",
      email: "zzz11",
      password: "zzz114"
    }
  ];
  res.json(users);
});

module.exports = app;
