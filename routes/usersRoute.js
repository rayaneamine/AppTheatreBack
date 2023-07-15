const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createNewUser,
} = require("../controllers/usersController.js");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/email/:email", getUserByEmail);
router.post("/", createNewUser);

module.exports = router;
