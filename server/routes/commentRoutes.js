const express = require("express");
const router = express.Router();
const { addComment } = require("../controllers/commentController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/:id", verifyToken, addComment);

module.exports = router;
