const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const ENV = {
  //Definition of the port we'll be using for our app
  PORT: process.env.PORT,
};

const connectionToDataBase = async () => {
  //Connection to the database
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = {
  ENV,
  connectionToDataBase,
};
