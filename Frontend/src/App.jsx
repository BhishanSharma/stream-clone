import {BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import DefaultVideos from './pages/DefaultVideos/DefaultVideos';
import Subscriptions from './pages/Subscriptions/Subscriptions';
import History from './pages/History/History';
import Playlists from './pages/Playlists/Playlists';
import YourVideos from './pages/YourVideos/YourVideos';
import LikedVideos from './pages/LikedVideos/LikedVideos';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import Header from './components/Header/Header';

function AppWrapper() {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");

  const hideHeader = ["/login", "/signup"].includes(location.pathname);

  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      {!hideHeader && <Header />}

      <Routes>
        {/* Unprotected routes */}
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Signup />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<DefaultVideos />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="history" element={<History />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="yourvideos" element={<YourVideos />} />
          <Route path="likedvideos" element={<LikedVideos />} />
        </Route>

        <Route
          path="/watch/:id"
          element={
            <ProtectedRoute>
              <VideoPlayer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadPage />
            </ProtectedRoute>
          }
        />

        {/* Fallback: Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;