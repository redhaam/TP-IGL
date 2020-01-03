/**
 * Represente la classe etudiant (Schema )
 */
const mongoose = require("mongoose");
/**
 * @param compte details du compte de l'étudiant
 * @param matricule matricule de l'étudiant
 * @param nom nom de l'étudiant
 * @param prenom prenom de l'étudiant
 * @param anneDetude l'année d'étude de l'étudiant
 * @param num_gp numéro du groupe de l'étudiant
 * @param nb_absences nombre d'absences de l'étudiant
 * @param moyenne moyenne générale de l'étudiant
 */
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
