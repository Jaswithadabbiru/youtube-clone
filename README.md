# 🎥 YouTube Clone (MERN Stack)

A full-stack YouTube-like video sharing web application built using the **MERN Stack**. Users can upload videos, watch others, login/register, comment, and manage their own channel — all in a smooth, responsive UI.

---

## 🌐 Live Preview (if deployed)

> _Coming Soon_ — currently runs on `localhost:3000`

---

## 🚀 Features

### 🎨 Frontend (React)
- 🏠 **Home Page** – Lists all videos with title, thumbnail, uploader, and view count.
- 🔍 **Search & Filter** – Search videos by title and filter by category (if implemented).
- 🎬 **Video Watch Page** – Embedded video player with comments, likes/dislikes.
- ⬆️ **Upload Page** – Authenticated users can upload new videos.
- 🔐 **Auth** – JWT-based login and registration.
- 📺 **Channel Page** – See all your own uploaded videos, with delete/edit options.
- 📱 **Fully Responsive** – Mobile, tablet, desktop friendly layout.

### 🧠 Backend (Node.js + Express + MongoDB)
- 📦 REST APIs for users, videos, and comments.
- 🔐 JWT Authentication middleware for protected routes.
- 📁 MongoDB Atlas database (Cloud).
- 🧪 Validations, error handling, and clean code structure.

---

## 💻 Tech Stack

| Frontend     | Backend        | Database        | Other Tools              |
|--------------|----------------|------------------|---------------------------|
| React.js     | Node.js        | MongoDB Atlas     | Axios, React Router DOM   |
| JSX, CSS     | Express.js     | Mongoose          | JWT, Bcrypt               |
| React Hooks  | Nodemon        | .env config       | ThunderClient / Postman   |

---
## ⚙️ Setup Instructions
 Clone and Run Locally

## 📦 Backend
cd server
npm install

## Create .env file with:
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=your_jwt_secret
npm run dev

## 💻 Frontend
cd client
npm install
npm start
The app should now be running at http://localhost:3000

## 🙋‍♀️ Developed By
Jaswitha Dabbiru
B.Tech CSE
