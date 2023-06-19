const Interviews = require("../models/interviewsModel.js");

const getAllInterviews = async (req, res) => {
  //To get all the data from the database
  try {
    const interviews = await Interviews.find({});
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInterviewsByType = async (req, res) => {
  //To get data using an id
  try {
    const type = req.params.type;
    const interview = await Interviews.find({ type: type });
    res.status(200).json(interview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createNewInterview = async (req, res) => {
  //To save data in the database
  try {
    const interviews = await Interviews.create(req.body);
    res.status(200).json(interviews);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllInterviews, getInterviewsByType, createNewInterview };
