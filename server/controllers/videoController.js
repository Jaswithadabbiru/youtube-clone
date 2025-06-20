const Video = require("../models/Video");

exports.uploadVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ msg: "Upload failed", error: err.message });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate("uploader", "username");
    res.status(200).json(videos);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch videos", error: err.message });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id).populate("uploader", "username");
video.views += 1;
await video.save();
    if (!video) return res.status(404).json({ msg: "Video not found" });
    res.status(200).json(video);
  } catch (err) {
    res.status(500).json({ msg: "Fetch failed", error: err.message });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    await Video.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Delete failed", error: err.message });
  }
};
