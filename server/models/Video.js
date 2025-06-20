const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  videoId: { type: String },
  title: { type: String, required: true },
  description: { type: String },
  thumbnailUrl: { type: String },
  videoUrl: { type: String },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: "Channel" },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  uploadDate: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
});

module.exports = mongoose.model("Video", videoSchema);
