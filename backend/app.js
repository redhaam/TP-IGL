const express = require("express");
const app = express();

app.use("/login", (req, res, next) => {
  const users = [
    {
      id: "aaaa",
      email: "yyy",
      password: "zzz"
    },
    {
      id: "kagh",
      email: "ydy",
      password: "zddzz"
    }
  ];

  res.json({
    users: users
  });
});

module.exports = app;
