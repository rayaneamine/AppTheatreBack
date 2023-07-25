const express = require("express");
const router = express.Router();
const path = require("path");
const axios = require("axios");
const fs = require("fs");

// Function to upload image from URL
const uploadImageFromURL = async (url, destination) => {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const imagePath = path.join(destination, path.basename(url));
    response.data.pipe(fs.createWriteStream(imagePath));

    return new Promise((resolve, reject) => {
      response.data.on("end", () => resolve(imagePath));
      response.data.on("error", (err) => reject(err));
    });
  } catch (error) {
    throw new Error("Failed to fetch image from URL");
  }
};

const handleImageUpload = async (req, res) => {
  const { category } = req.params;
  const imageUrl = req.query.url; // Extract image URL from the query parameter

  try {
    if (!imageUrl) {
      return res
        .status(400)
        .json({ error: "Image URL is required in the request query" });
    }

    const imagePath = await uploadImageFromURL(
      imageUrl,
      path.join("public", category)
    );

    console.log("Image uploaded successfully:", imagePath);
    // Add further logic to save the image URL to the database or take any necessary actions.
    res.sendStatus(200);
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500);
  }
};

module.exports = {
  handleImageUpload,
};
