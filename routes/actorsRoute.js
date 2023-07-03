const express = require("express");
const router = express.Router();

const {
  getAllActors,
  getActorByPlay,
  createNewActor,
} = require("../controllers/actorsController.js");

router.get("/", getAllActors);
router.get("/:type", getActorByPlay);
router.post("/", createNewActor);

module.exports = router;
