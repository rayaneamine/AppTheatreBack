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

const getNewsById = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const id = req.params.id;
    const news = await News.findOne({ _id: id, theatre: theatre });
    if (!news) {
      return res.status(404).json({ message: "News not found" });
    }
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

const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNews = await News.findByIdAndDelete(id);

    if (!deletedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json({ message: "News deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedNews = await News.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedNews) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(updatedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNews,
  getNewsByTheatre,
  getNewsById,
  createNewNews,
  deleteNews,
  updateNews,
};
