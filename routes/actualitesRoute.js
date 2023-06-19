const express = require("express");
const router = express.Router();

const {
  getAllActualites,
  getActualitesByType,
  createNewActualite,
} = require("../controllers/actualitesController.js");

router.get("/", getAllActualites);
router.get("/:type", getActualitesByType);
router.post("/", createNewActualite);

module.exports = router;
