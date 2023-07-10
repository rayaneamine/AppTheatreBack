const express = require("express");
const router = express.Router();

const {
  getAllPlays,
  getPlayByName,
  getPlayByTheatre,
  getPlayById,
  createNewPlay,
} = require("../controllers/playsController.js");

router.get("/", getAllPlays);
router.get("/name/:name", getPlayByName);
router.get("/:theatre", getPlayByTheatre);
router.get("/:theatre/:id", getPlayById);
router.post("/", createNewPlay);

module.exports = router;
