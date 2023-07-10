const express = require("express");
const router = express.Router();

const {
  getAllNews,
  getNewsByTheatre,
  createNewNews,
} = require("../controllers/newsController.js");

router.get("/", getAllNews);
router.get("/:theatre", getNewsByTheatre);
router.post("/", createNewNews);

module.exports = router;
