const mongoose = require("mongoose");

const actualiteSchema = mongoose.Schema({
  description: String,
  type: String,
  path: String,
});

const Actualites = mongoose.model("actualites", actualiteSchema);

module.exports = Actualites;
