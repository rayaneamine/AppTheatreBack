const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema({
  description: String,
  type: String,
  path: String,
});

const Medias = mongoose.model("Medias", mediaSchema);

module.exports = Medias;
