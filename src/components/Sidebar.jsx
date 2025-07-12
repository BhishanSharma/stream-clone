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
        onClick={() => navigate("/subscriptions")}
      >
        Subscriptions
      </div>
      <hr />
      <div
        className="menu-item"
        onClick={() => navigate("/history")}
      >
        History
      </div>
      <div
        className="menu-item"
        onClick={() => navigate("/playlists")}
      >
        Playlists
      </div>
      <div
        className="menu-item"
        onClick={() => navigate("/yourvideos")}
      >
        Your videos
      </div>
      <div
        className="menu-item"
        onClick={() => navigate("/likedvideos")}
      >
        Liked videos
      </div>
    </div>
  );
}

export default Sidebar;
