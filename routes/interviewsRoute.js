const express = require("express");
const router = express.Router();

const {
  getAllInterviews,
  getInterviewsByType,
  createNewInterview,
} = require("../controllers/interviewsController.js");

router.get("/", getAllInterviews);
router.get("/:type", getInterviewsByType);
router.post("/", createNewInterview);

module.exports = router;
