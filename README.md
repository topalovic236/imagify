# 🖼️ Imagify

Imagify is a SaaS platform that allows users to generate AI images from text using the ClipDrop API.  
Users can log in, generate images, and download them — each generation costs 1 credit (users start with 10).  
Authentication is handled using JWT.

---

## 🌐 Live Demo

👉 [Visit Imagify](https://imagifya.netlify.app/)

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 🧠 AI text-to-image generation (ClipDrop API)
- 💰 Credit system (10 initial credits per user)
- 📦 Dockerized backend & frontend 
- ☁️ Backend hosted on Render, frontend on Netlify
- ⬇️ Image download after generation
- 🛒 (Coming Soon) Stripe integration for purchasing credits

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Authentication**: JWT
- **Database**: MongoDB (MongoDB Atlas)
- **Hosting**:
  - Frontend: Netlify
  - Backend: Render
- **Other**: Docker, ClipDrop API

---

## 📥 Installation (Run Locally)

```bash
# 1. Clone the repository
git clone https://github.com/topalovic236/imagify.git
cd imagify

# 2. Setup Backend
cd server
npm install

# Create .env file and add the following:
# MONGO_URI=your_mongo_uri
# JWT_SECRET=your_jwt_secret
# CLIPDROP_API_KEY=your_clipdrop_key

npm run dev

# 3. Setup Frontend
cd ../client
npm install
npm start

# Open your browser at:
# http://localhost:3000


