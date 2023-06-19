const Visites = require("../models/visitesModel.js");

const getAllVisites = async (req, res) => {
  //To get all the data from the database
  try {
    const visites = await Visites.find({});
    res.status(200).json(visites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVisitesByType = async (req, res) => {
  //To get data using an id
  try {
    const type = req.params.type;
    const visite = await Visites.find({ type: type });
    res.status(200).json(visite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewVisite = async (req, res) => {
  //To save data in the database
  try {
    const visites = await Visites.create(req.body);
    res.status(200).json(visites);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllVisites, getVisitesByType, createNewVisite };
