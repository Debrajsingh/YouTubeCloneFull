# YouTube Clone Full Stack Project

A full-stack YouTube clone built with **React**, **Express.js**, and **MongoDB**. This project allows users to sign up, log in, upload videos, view videos, comment, and manage their profiles, mimicking core YouTube functionality.

---

## Features

- **User Authentication:** Sign up, log in, and log out with JWT and cookies.
- **Video Upload & Playback:** Users can upload videos and watch them.
- **Profile Management:** View and edit user profiles.
- **Comments:** Add and view comments on videos.
- **Responsive UI:** Built with React and Material UI.
- **Protected Routes:** Only authenticated users can upload videos or comment.
- **Error Handling:** User-friendly error messages and loading states.

---

## Tech Stack

- **Frontend:** React, React Router, Axios, Material UI
- **Backend:** Node.js, Express.js, Mongoose
- **Database:** MongoDB
- **Authentication:** JWT, Cookies
- **Other:** CORS, bcryptjs, react-toastify

---

## Folder Structure

```
YouTube-clone-full/
│
├── Connection/         # MongoDB connection
├── Controllers/        # Express controllers (user, video, comment)
├── Modals/             # Mongoose models (user, video, comment)
├── Routes/             # Express routes
├── middleware/         # Authentication middleware
├── youtube/            # React frontend
│   ├── src/
│   │   ├── Component/  # Navbar, Login, SideNavbar, etc.
│   │   ├── Pages/      # Home, Video, Profile, SignUp, VideoUpload
│   │   └── App.js
│   └── public/
├── index.js            # Express server entry point
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Backend Setup

1. **Install dependencies:**
    ```bash
    npm install
    ```
2. **Configure MongoDB:**
    - Edit `Connection/conn.js` with your MongoDB URI if needed.

3. **Start the backend:**
    ```bash
    node index.js
    ```
    The backend runs on [http://localhost:4000](http://localhost:4000).

### Frontend Setup

1. **Navigate to the frontend folder:**
    ```bash
    cd youtube
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend:**
    ```bash
    npm start
    ```
    The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Auth
- `POST /auth/signUp` — Register a new user
- `POST /auth/login` — Log in
- `POST /auth/logout` — Log out

### Videos
- `POST /api/uploadVideo` — Upload a video
- `GET /api/allVideo` — Get all videos
- `GET /api/getVideoById/:id` — Get video by ID
- `GET /api/:userId/allVideoByUserID` — Get all videos by user

### Comments
- `POST /api/comment` — Add a comment
- `GET /api/:videoId/allCommentByVideoId` — Get all comments for a video

### Profile
- `GET /api/:id/channel` — Get user profile and videos

---

## Environment Variables

- Configure your MongoDB URI and JWT secret in `Connection/conn.js` and controllers as needed.

---


## License

This project is for educational purposes only.

---

## Author
[Debraj Singh] 

---

## GitHub Repository
(https://github.com/Debrajsingh/YouTubeCloneFull)