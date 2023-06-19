const express = require("express");
const router = express.Router();

const {
  getAllProgrammations,
  getProgrammationsByType,
  createNewProgrammation,
} = require("../controllers/programmationsController.js");

router.get("/", getAllProgrammations);
router.get("/:type", getProgrammationsByType);
router.post("/", createNewProgrammation);

module.exports = router;
