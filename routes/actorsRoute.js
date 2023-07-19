const express = require("express");
const router = express.Router();

const {
  getAllActors,
  getActorByName,
  getActorByPlay,
  getActorByTheatre,
  getActorById,
  createNewActor,
  deleteActor,
  updateActor,
} = require("../controllers/actorsController.js");

router.get("/", getAllActors);
router.get("/:theatre/:name", getActorByName);
router.get("/actors/play/:name", getActorByPlay);
router.get("/:theatre", getActorByTheatre);
router.get("/actor/id/:id", getActorById);
router.delete("/delete/:id", deleteActor);
router.put("/put/:id", updateActor);
router.post("/post", createNewActor);

module.exports = router;
