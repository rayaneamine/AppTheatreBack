const express = require("express");
const router = express.Router();

const {
  getAllNews,
  getNewsByTheatre,
  getNewsById,
  createNewNews,
  deleteNews,
  updateNews,
} = require("../controllers/newsController.js");

router.get("/", getAllNews);
router.get("/:theatre", getNewsByTheatre);
router.get("/:theatre/id/:id", getNewsById);
router.delete("/delete/:id", deleteNews);
router.put("/put/:id", updateNews);
router.post("/post", createNewNews);

module.exports = router;
