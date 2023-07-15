const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserByEmail,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController.js");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/email/:email", getUserByEmail);
router.post("/", createNewUser);

module.exports = router;
