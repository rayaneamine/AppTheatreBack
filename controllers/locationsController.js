const Locations = require("../models/locationsModel.js");

const getAllLocations = async (req, res) => {
  //To get all the data from the database
  try {
    const locations = await Locations.find({});
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocationByTheatre = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const location = await Locations.find({ theatre: theatre });
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocationById = async (req, res) => {
  //To get data using an id
  try {
    const theatre = req.params.theatre;
    const id = req.params.id;
    const location = await Locations.findOne({ _id: id, theatre: theatre });
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewLocation = async (req, res) => {
  //To save data in the database
  try {
    const locations = await Locations.create(req.body);
    res.status(200).json(locations);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

const deleteLocation = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedLocation = await Locations.findByIdAndDelete(id);

    if (!deletedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.status(200).json({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;

    const updatedLocation = await Locations.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllLocations,
  getLocationByTheatre,
  getLocationById,
  createNewLocation,
  deleteLocation,
  updateLocation,
};
