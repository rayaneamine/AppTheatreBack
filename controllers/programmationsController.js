const Programmations = require("../models/programmationsModel.js");

const getAllProgrammations = async (req, res) => {
  //To get all the data from the database
  try {
    const programmations = await Programmations.find({});
    res.status(200).json(programmations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProgrammationsByType = async (req, res) => {
  //To get data using an id
  try {
    const type = req.params.type;
    const programmation = await Programmations.find({ type: type });
    res.status(200).json(programmation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewProgrammation = async (req, res) => {
  //To save data in the database
  try {
    const programmation = await Programmations.create(req.body);
    res.status(200).json(programmation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllProgrammations,
  getProgrammationsByType,
  createNewProgrammation,
};
