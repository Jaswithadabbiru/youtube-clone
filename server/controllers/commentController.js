const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  try {
    const newComment = await Comment.create({
      videoId: req.params.id,
      userId: req.user,
      text: req.body.text,
    });

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ msg: "Failed to add comment", error: err.message });
  }
};
