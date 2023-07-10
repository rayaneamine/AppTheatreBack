const mongoose = require("mongoose");

const actorSchema = mongoose.Schema({
  name: String,
  role: String,
  biography: String,
  imagePath: String,
  videoPath: String,
  theatre: String,
  plays: Array,
});

const Actors = mongoose.model("Actors", actorSchema);

module.exports = Actors;
