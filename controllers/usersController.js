const Users = require("../models/usersModel.js");

const getAllUsers = async (req, res) => {
  //To get all the data from the database
  try {
    const users = await Users.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  //To get data using an id
  try {
    const email = req.params.email;
    const user = await Users.findOne({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  //To get data using an id
  try {
    const id = req.params.id;
    const user = await Users.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNewUser = async (req, res) => {
  //To save data in the database
  try {
    const users = await Users.create(req.body);
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createNewUser,
};
