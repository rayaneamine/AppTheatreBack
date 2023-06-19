const Actualites = require("../models/actualitesModel.js");

const getAllActualites = async (req, res) => {
  //To get all the data from the database
  try {
    const actualites = await Actualites.find({});
    res.status(200).json(actualites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getActualitesByType = async (req, res) => {
  //To get data using an id
  try {
    const type = req.params.type;
    const actualite = await Actualites.find({ type: type });
    res.status(200).json(actualite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewActualite = async (req, res) => {
  //To save data in the database
  try {
    const actualites = await Actualites.create(req.body);
    res.status(200).json(actualites);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllActualites, getActualitesByType, createNewActualite };
