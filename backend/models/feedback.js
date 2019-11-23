const mongoose = require("mongoose");
const feedbackSchema = mongoose.Schema({
  nomModule: { type: String },
  anneDetude: { type: String },
  contenu: { type: String }
});
module.exports = mongoose.model("Feedback", feedbackSchema);
