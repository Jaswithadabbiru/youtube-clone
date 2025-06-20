const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Video = require("../models/Video");

dotenv.config();

const demoVideos = [
  {
    title: "React Crash Course",
    description: "Learn React fast",
    thumbnailUrl: "https://i.imgur.com/L86ufJc.png",
    videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
  },
  {
    title: "MERN Stack Project",
    description: "Full-stack app in 40 mins",
    thumbnailUrl: "https://i.imgur.com/XRrLdyO.png",
    videoUrl: "https://www.youtube.com/embed/7CqJlxBYj-M",
  },
  {
    title: "JS Mastery",
    description: "Everything about JavaScript",
    thumbnailUrl: "https://i.imgur.com/1bX5QH6.png",
    videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
  },
  {
    title: "Frontend Dev Roadmap",
    description: "Roadmap to frontend success",
    thumbnailUrl: "https://i.imgur.com/zY5DC1H.png",
    videoUrl: "https://www.youtube.com/embed/ZxKM3DCV2kE",
  },
  {
    title: "AI in 2024",
    description: "AI’s future explained",
    thumbnailUrl: "https://i.imgur.com/8Km9tLL.png",
    videoUrl: "https://www.youtube.com/embed/rmC2IMfFs9A",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    const inserted = await Video.insertMany(demoVideos.map((video) => ({
      ...video,
      uploader: null, // or put a real user _id if you want
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: [],
      uploadDate: new Date(),
    })));

    console.log(`✅ Inserted ${inserted.length} videos`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Error:", err);
    mongoose.disconnect();
  });
