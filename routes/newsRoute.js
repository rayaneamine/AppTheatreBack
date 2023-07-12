const express = require("express");
const router = express.Router();

const {
  getAllNews,
  getNewsByTheatre,
  getNewsById,
  createNewNews,
} = require("../controllers/newsController.js");

router.get("/", getAllNews);
router.get("/:theatre", getNewsByTheatre);
router.get("/:theatre/id/:id", getNewsById);
router.post("/", createNewNews);

module.exports = router;
