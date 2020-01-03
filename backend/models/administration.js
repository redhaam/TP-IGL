/**
 * Represente la classe administration (Schema )
 */
const mongoose = require("mongoose");
/**
 * @param user Details du compte
 * @param nom nom de l'administrateur
 * @param prenom prenom de l'administrateur
 */
const administrationSchema = mongoose.Schema({
  user: { email: String, password: String },
  nom: { type: String },
  prenom: { type: String }
});
module.exports = mongoose.model("Administration", administrationSchema);
