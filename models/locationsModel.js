const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  name: String,
  description: String,
  imagePath: String,
  imagePath2: String,
  videoPath: String,
  theatre: String,
});

const Locations = mongoose.model("Locations", locationSchema);

module.exports = Locations;
