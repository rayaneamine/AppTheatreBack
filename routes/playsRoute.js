const express = require("express");
const router = express.Router();

const {
  getAllPlays,
  getPlayByName,
  getPlayByTheatre,
  createNewPlay,
} = require("../controllers/playsController.js");

router.get("/", getAllPlays);
router.get("/name/:name", getPlayByName);
router.get("/theatre/:theatre", getPlayByTheatre);
router.post("/", createNewPlay);

module.exports = router;
