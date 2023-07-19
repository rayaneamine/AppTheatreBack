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
    const name = req.params.name;
    const actor = await Actors.find({ "plays.name": name });
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActorByName = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const name = req.params.name;
    const actor = await Actors.findOne({ name: name, theatre: theatre });
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActorByTheatre = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const actor = await Actors.find({ theatre: theatre });
    res.status(200).json(actor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActorById = async (req, res) => {
  //To get data using an id
  try {
    const id = req.params.id;
    const actor = await Actors.findOne({ _id: id });
    if (!actor) {
      return res.status(404).json({ message: "Actor not found" });
    }
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

const deleteActor = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedActor = await Actors.findByIdAndDelete(id);

    if (!deletedActor) {
      return res.status(404).json({ message: "Actor not found" });
    }

    res.status(200).json({ message: "Actor deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateActor = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedActor = await Actors.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedActor) {
      return res.status(404).json({ message: "Actor not found" });
    }

    res.status(200).json(updatedActor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllActors,
  getActorByName,
  getActorByPlay,
  getActorByTheatre,
  getActorById,
  createNewActor,
  deleteActor,
  updateActor,
};
