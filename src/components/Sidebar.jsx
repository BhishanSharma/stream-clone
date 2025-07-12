import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div 
      className="menu-item active" 
      onClick={(e) => navigate("/")}>
        Home
      </div>
      <div
        className="menu-item"
        onClick={() => alert("Subscriptions coming soon!")}
      >
        Subscriptions
      </div>
      <hr />
      <div
        className="menu-item"
        onClick={() => alert("History page coming soon!")}
      >
        History
      </div>
      <div
        className="menu-item"
        onClick={() => alert("Playlists coming soon!")}
      >
        Playlists
      </div>
      <div
        className="menu-item"
        onClick={() => alert("Playlists coming soon!")}
      >
        Your videos
      </div>
      <div
        className="menu-item"
        onClick={() => alert("Playlists coming soon!")}
      >
        Liked videos
      </div>
    </div>
  );
}

export default Sidebar;
