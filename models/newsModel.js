const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  name: String,
  description: String,
  thumbnail: String,
  imagePath: String,
  videoPath: String,
  theatre: String,
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
