const express = require("express");
const router = express.Router();

const {
  getAllLocations,
  getLocationByTheatre,
  getLocationById,
  createNewLocation,
} = require("../controllers/locationsController.js");

router.get("/", getAllLocations);
router.get("/:theatre", getLocationByTheatre);
router.get("/:theatre/id/:id", getLocationById);
router.post("/", createNewLocation);

module.exports = router;
