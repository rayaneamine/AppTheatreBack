const express = require("express");
const router = express.Router();

const {
  getAllActors,
  getActorByName,
  getActorByPlay,
  getActorByTheatre,
  getActorById,
  createNewActor,
} = require("../controllers/actorsController.js");

router.get("/", getAllActors);
router.get("/:theatre/:name", getActorByName);
router.get("/play/:play", getActorByPlay);
router.get("/:theatre", getActorByTheatre);
router.get("/:theatre/:id", getActorById);
router.post("/", createNewActor);

module.exports = router;
