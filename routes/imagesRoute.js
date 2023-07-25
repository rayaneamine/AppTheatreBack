const express = require("express");
const router = express.Router();
const imagesController = require("../controllers/imagesController.js");

// Route for uploading image from URL
router.post("/:category/upload", imagesController.handleImageUpload);

module.exports = router;
