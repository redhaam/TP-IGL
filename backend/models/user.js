/**
 * Represente la classe user (Schema )
 */
const mongoose = require("mongoose");
/**
 * @param username Nom d'utilisateur
 * @param password Mot de passe
 */
const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});
module.exports = mongoose.model("User", userSchema);
