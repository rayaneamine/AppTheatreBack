const Medias = require("../models/mediaModel.js");

const getAllMedia = async (req, res) => {
  //To get all the data from the database
  try {
    const medias = await Medias.find({});
    res.status(200).json(medias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMediaByType = async (req, res) => {
  //To get data using an id
  try {
    const type = req.params.type;
    const media = await Medias.find({ type: type });
    res.status(200).json(media);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewMedia = async (req, res) => {
  //To save data in the database
  try {
    const medias = await Medias.create(req.body);
    res.status(200).json(medias);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMedia, getMediaByType, createNewMedia };
