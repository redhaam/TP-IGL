const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
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
