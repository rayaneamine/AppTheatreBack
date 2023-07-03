const Plays = require("../models/playsModel.js");

const getAllPlays = async (req, res) => {
  //To get all the data from the database
  try {
    const plays = await Plays.find({});
    res.status(200).json(plays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlayByName = async (req, res) => {
  //To get data using an id
  try {
    const name = req.params.name;
    const play = await Plays.find({ name: name });
    res.status(200).json(play);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlayByTheatre = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const play = await Plays.find({ theatre: theatre });
    res.status(200).json(play);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewPlay = async (req, res) => {
  //To save data in the database
  try {
    const plays = await Plays.create(req.body);
    res.status(200).json(plays);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlays,
  getPlayByName,
  getPlayByTheatre,
  createNewPlay,
};
