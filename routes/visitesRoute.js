const express = require("express");
const router = express.Router();

const {
  getAllVisites,
  getVisitesByType,
  createNewVisite,
} = require("../controllers/visitesController.js");

router.get("/", getAllVisites);
router.get("/:type", getVisitesByType);
router.post("/", createNewVisite);

module.exports = router;
