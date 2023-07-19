const express = require("express");
const router = express.Router();

const {
  getAllPlays,
  getPlayByName,
  getPlayByTheatre,
  getPlayById,
  createNewPlay,
  deletePlay,
  updatePlay,
} = require("../controllers/playsController.js");

router.get("/", getAllPlays);
router.get("/name/:name", getPlayByName);
router.get("/:theatre", getPlayByTheatre);
router.get("/:theatre/:id", getPlayById);
router.delete("/delete/:id", deletePlay);
router.put("/put/:id", updatePlay);
router.post("/post", createNewPlay);

module.exports = router;
