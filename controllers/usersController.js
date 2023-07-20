const Users = require("../models/usersModel.js");
const bcrypt = require("bcrypt");

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

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { password } = req.body;

    const user = await Users.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.password = password;
    await user.save(); // Trigger pre-save hook

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await Users.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkUserExists = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user with the given email
    const user = await Users.findOne({ email });

    // If a user is found, compare the provided password with the stored hashed password
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.status(200).json({ id: user._id });
      } else {
        res.status(200).json({ message: "The password is incorrect" });
      }
    } else {
      res.status(200).json({ message: "No user found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
  checkUserExists,
};
