const mongoose = require("mongoose");

const programmationSchema = mongoose.Schema({
  description: String,
  type: String,
  path: String,
});

const Programmations = mongoose.model("programmations", programmationSchema);

module.exports = Programmations;
