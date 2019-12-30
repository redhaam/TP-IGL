const mongoose = require("mongoose");
const etudiantSchema = mongoose.Schema({
  compte: { email: String, password: String },
  matricule: { type: String },
  nom: { type: String },
  prenom: { type: String },
  anneEtude: { type: String },
  num_gp: { type: Number },
  nb_absences: { type: Number },
  moyenne: { type: Number }
});
module.exports = mongoose.model("Etudiant", etudiantSchema);
