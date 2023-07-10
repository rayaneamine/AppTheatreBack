const News = require("../models/newsModel.js");

const getAllNews = async (req, res) => {
  //To get all the data from the database
  try {
    const news = await News.find({});
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNewsByTheatre = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const news = await News.find({ theatre: theatre });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewNews = async (req, res) => {
  //To save data in the database
  try {
    const news = await News.create(req.body);
    res.status(200).json(news);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllNews, getNewsByTheatre, createNewNews };
