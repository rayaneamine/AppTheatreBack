const mongoose = require("mongoose");

const playSchema = mongoose.Schema({
  name: String,
  description: String,
  imagePath: String,
  videoPath: String,
  duration: String,
  theatre: String,
  actors: Array,
});

const Plays = mongoose.model("Plays", playSchema);

module.exports = Plays;
