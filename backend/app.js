const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Administration = require("./models/administration");
mongoose
  .connect(
    "mongodb+srv://said:955hq3y1qH1mudS6@cluster0-my0wk.mongodb.net/tpigldb?retryWrites=true&w=majority",
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.use("/login", (req, res, next) => {
  // const Administration = new Administration({
  // user: {
  //   email: "hm_kadri@esi.dz",
  //   password: "1234"
  // },
  //  nom: "said",
  // prenom: "kadri"
  // });
  // console.log(Administration);
  Administration.find().then(documents => {
    console.log(documents);
    res.json(documents);
  });
  /* const users = [
    {
      email: "yyy",
      password: "zzz"
    },
    {
      email: "zzz11",
      password: "zzz114"
    }
  ];*/
});

module.exports = app;
