const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Administration = require("./models/administration");
const Feedback = require("./models/feedback");
const Etudiant = require("./models/etudiant");
/*mongoose
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
    console.log(err);
  });*/
const url = "mongodb://127.0.0.1:27017/tpigl";
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", _ => {
  console.log("Database connected:", url);
});

db.on("error", err => {
  console.error("connection error:", err);
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
app.post("/feedback/submit", (req, res, next) => {
  const feedback = new Feedback({
    nomModule: req.body.nomModule,
    anneDetude: req.body.anneDetude,
    contenu: req.body.contenu
  });
  feedback.save(); // saving the feedback to the database
  res.status(201).json({
    message: "feedback added successfuly"
  });
});

app.post("/Add/Etudiant", (req, res, next) => {
  const etudiant = new Etudiant({
    compte: {
      email: req.body.compte.email ,
      password: "12546"
    },
    // matricule
    nom: req.body.nom,
    prenom: req.body.prenom,
    anneEtude: req.body.niveauDEtude,
    num_gp: Math.floor(Math.random() * 10) + 1,
    nb_absences: 0,
    moyenne: 0,
    matricule: 19 + "/" + Math.floor(Math.random() * 1000) + 1
  });
  //   Etudiant.count({}, function( err, count){
  //     console.log( "Number of students:", count );
  // })
  //   etudiant.count
  console.log(etudiant);
  etudiant.save(); // saving the feedback to the database
  res.status(201).json({
    message: "Student added successfuly"
  });
});

app.use("/login/admin", (req, res, next) => {
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
