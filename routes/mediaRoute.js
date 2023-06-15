const express = require("express");
const router = express.Router();

const {
  getAllMedia,
  getMediaByType,
  createNewMedia,
} = require("../controllers/mediaController.js");

router.get("/", getAllMedia);
router.get("/:type", getMediaByType);
router.post("/", createNewMedia);

module.exports = router;
