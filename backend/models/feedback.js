/**
 * Represente la classe feedback (Schema )
 */
const mongoose = require("mongoose");
/**
 * @param nomModule Nom du module
 * @param anneDetude l'année d'étude de l'étudiant qui envoie le feedback
 * @param contenu le contenu du feedback
 */
const feedbackSchema = mongoose.Schema({
  nomModule: { type: String },
  anneDetude: { type: String },
  contenu: { type: String }
});
module.exports = mongoose.model("Feedback", feedbackSchema);
