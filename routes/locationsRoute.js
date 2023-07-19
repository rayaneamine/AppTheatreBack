const express = require("express");
const router = express.Router();

const {
  getAllLocations,
  getLocationByTheatre,
  getLocationById,
  createNewLocation,
  deleteLocation,
  updateLocation,
} = require("../controllers/locationsController.js");

router.get("/", getAllLocations);
router.get("/:theatre", getLocationByTheatre);
router.get("/:theatre/id/:id", getLocationById);
router.delete("/delete/:id", deleteLocation);
router.put("/put/:id", updateLocation);
router.post("/post", createNewLocation);

module.exports = router;
