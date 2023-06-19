const mongoose = require("mongoose");

const interviewSchema = mongoose.Schema({
  description: String,
  type: String,
  path: String,
});

const Interviews = mongoose.model("interviews", interviewSchema);

module.exports = Interviews;
