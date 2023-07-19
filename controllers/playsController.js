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

const getPlayById = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const id = req.params.id;
    const play = await Plays.findOne({ _id: id, theatre: theatre });
    if (!play) {
      return res.status(404).json({ message: "Play not found" });
    }
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

const deletePlay = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPlay = await Plays.findByIdAndDelete(id);

    if (!deletedPlay) {
      return res.status(404).json({ message: "Play not found" });
    }

    res.status(200).json({ message: "Play deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlay = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedPlay = await Plays.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedPlay) {
      return res.status(404).json({ message: "Play not found" });
    }

    res.status(200).json(updatedPlay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPlays,
  getPlayByName,
  getPlayByTheatre,
  getPlayById,
  createNewPlay,
  deletePlay,
  updatePlay,
};
