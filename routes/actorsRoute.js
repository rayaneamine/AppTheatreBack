const express = require("express");
const router = express.Router();

const {
  getAllActors,
  getActorByPlay,
  getActorByTheatre,
  createNewActor,
} = require("../controllers/actorsController.js");

router.get("/", getAllActors);
router.get("/play/:play", getActorByPlay);
router.get("/theatre/:theatre", getActorByTheatre);
router.post("/", createNewActor);

module.exports = router;
