const express = require("express");
const router = express.Router();
const {
  uploadVideo,
  getAllVideos,
  getVideoById,
  deleteVideo,
} = require("../controllers/videoController");

const Video = require("../models/Video"); // ✅ required for the /user route

// POST /api/videos/upload
router.post("/upload", uploadVideo);

// GET /api/videos/user/:userId
router.get("/user/:userId", async (req, res) => {
  try {
    const videos = await Video.find({ uploader: req.params.userId });
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching user videos" });
  }
});

// GET /api/videos/:id → this should come AFTER /user/:userId to avoid route conflicts
router.get("/:id", getVideoById);

// GET /api/videos/ → all videos
router.get("/", getAllVideos);

// DELETE /api/videos/:id
router.delete("/:id", deleteVideo);

module.exports = router;
// This code defines the video routes for uploading, fetching, and deleting videos in a YouTube clone application.