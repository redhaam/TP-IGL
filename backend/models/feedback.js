const mongoose = require("mongoose");
const feedbackSchema = mongoose.Schema({
  // la classe feedback (Schema )
  nomModule: { type: String }, // le nom de module
  anneDetude: { type: String }, // l'année d'etudiant de l'etudiant qui envoie le feedback
  contenu: { type: String } // le contenu de feedback
});
module.exports = mongoose.model("Feedback", feedbackSchema);
