const Actors = require("../models/actorsModel.js");

const getAllActors = async (req, res) => {
  //To get all the data from the database
  try {
    const actors = await Actors.find({});
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActorByPlay = async (req, res) => {
  //To get data using an id
  try {
    const play = req.params.type;
    const actor = await Actors.find({ plays: play });
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewActor = async (req, res) => {
  //To save data in the database
  try {
    const actors = await Actors.create(req.body);
    res.status(200).json(actors);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllActors, getActorByPlay, createNewActor };
