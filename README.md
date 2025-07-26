# 📺 Stream Clone

A **video streaming application** clone built with **Node.js** (backend) and **React** (frontend). Designed to replicate the functionality and user experience of popular streaming platforms.

---

## 🚀 Features

- 🎬 Video listing & playback  
- 📤 Upload and serve videos via streaming  
- 🔐 User authentication (JWT/session-based)  
- 🔎 Search and filter capabilities  
- 📱 Responsive UI using React

---

## 🛠️ Tech Stack

| Layer      | Technology             |
|------------|------------------------|
| Frontend   | React.js, Axios        |
| Backend    | Node.js, Express.js    |
| Streaming  | HTTP Range Headers     |
| Database   | MongoDB / PostgreSQL   |
| Auth       | JWT or Sessions        |
| Styling    | Tailwind CSS / Bootstrap |
| File Upload | Multer / Cloudinary    |

---

## 📁 Folder Structure (Example)

```
stream-clone/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── utils/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
├── .env.example
├── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/BhishanSharma/stream-clone.git
cd stream-clone
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in environment variables: DB_URI, JWT_SECRET, etc.
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint                     | Description           |
|--------|------------------------------|-----------------------|
| GET    | /api/videos                  | List all videos       |
| GET    | /api/videos/:id/stream       | Stream a specific video |
| POST   | /api/videos                  | Upload a new video    |
| POST   | /api/auth/register           | Register a user       |
| POST   | /api/auth/login              | Login a user          |

---

## 🎥 How Streaming Works

- Uses HTTP `Range` headers to serve partial video content  
- Enables video seeking and smooth streaming  
- Server reads and pipes chunks from the filesystem  
- Efficient memory use (no full file load)

---

## 🌐 Environment Variables (`.env`)

```
PORT=5000
DB_URI=your_mongodb_or_postgres_connection
JWT_SECRET=your_jwt_secret_key
VIDEO_DIR=/absolute/path/to/videos
```

---

## 🧩 Dependencies

- **Backend**: express, mongoose/pg, jsonwebtoken, multer, dotenv, cors  
- **Frontend**: react, react-router-dom, axios, react-player or HTML5 video  
- **Dev Tools**: nodemon, concurrently (optional)

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/something`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/something`)  
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## ✨ Author

**Bhishan Sharma**  
[GitHub: BhishanSharma](https://github.com/BhishanSharma)

> ⚠️ This project is for educational purposes only and is not affiliated with any real streaming platform.

---

## 🙏 Special Credits

This project was bootstrapped with [create-auth-app](https://www.npmjs.com/package/create-auth-app), a helpful tool for scaffolding authentication-ready React applications. Thanks to the creators and maintainers of the package for simplifying project setup!
