import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div 
        className={`menu-item ${isActive("/") ? "active" : ""}`} 
        onClick={() => navigate("/")}
      >
        Home
      </div>

      <div
        className={`menu-item ${isActive("/subscriptions") ? "active" : ""}`}
        onClick={() => navigate("/subscriptions")}
      >
        Subscriptions
      </div>

      <hr />

      <div
        className={`menu-item ${isActive("/history") ? "active" : ""}`}
        onClick={() => navigate("/history")}
      >
        History
      </div>

      <div
        className={`menu-item ${isActive("/playlists") ? "active" : ""}`}
        onClick={() => navigate("/playlists")}
      >
        Playlists
      </div>

      <div
        className={`menu-item ${isActive("/yourvideos") ? "active" : ""}`}
        onClick={() => navigate("/yourvideos")}
      >
        Your videos
      </div>

      <div
        className={`menu-item ${isActive("/likedvideos") ? "active" : ""}`}
        onClick={() => navigate("/likedvideos")}
      >
        Liked videos
      </div>
    </div>
  );
}

export default Sidebar;
