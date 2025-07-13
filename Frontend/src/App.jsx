import { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route, Navigate } from "react-router-dom";

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
import "./App.css";

function AppWrapper() {
  const location = useLocation();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setAuth(!!storedUser);
    } catch {
      setAuth(false);
    } finally {
      setLoading(false); // ✅ done checking
    }
  }, []);

  const hideHeader = ["/login", "/signup"].includes(location.pathname);

  if (loading) return null; // or a spinner

  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      {!hideHeader && <Header />}

      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={auth ? <Navigate to="/" replace /> : <Signup />} />
        <Route path="/login" element={auth ? <Navigate to="/" replace /> : <Login />} />

        {/* Protected routes */}
        <Route path="/" element={auth ? <Home /> : <Navigate to="/login" replace />} >
          <Route index element={<DefaultVideos />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="history" element={<History />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="yourvideos" element={<YourVideos />} />
          <Route path="likedvideos" element={<LikedVideos />} />
        </Route>

        <Route path="/watch/:id" element={auth ? <VideoPlayer /> : <Navigate to="/login" replace />} />
        <Route path="/upload" element={auth ? <UploadPage /> : <Navigate to="/login" replace />} />
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
