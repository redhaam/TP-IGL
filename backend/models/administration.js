const mongoose = require("mongoose");
const administrationSchema = mongoose.Schema({
  user: { email: String, password: String },
  nom: { type: String },
  prenom: { type: String }
});
module.exports = mongoose.model("Administration", administrationSchema);
