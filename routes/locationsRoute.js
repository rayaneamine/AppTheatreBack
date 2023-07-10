const express = require("express");
const router = express.Router();

const {
  getAllLocations,
  getLocationByTheatre,
  createNewLocation,
} = require("../controllers/locationsController.js");

router.get("/", getAllLocations);
router.get("/:theatre", getLocationByTheatre);
router.post("/", createNewLocation);

module.exports = router;
