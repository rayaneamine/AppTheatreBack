const mongoose = require("mongoose");

const visiteSchema = mongoose.Schema({
  description: String,
  type: String,
  path: String,
});

const Visites = mongoose.model("visites", visiteSchema);

module.exports = Visites;
