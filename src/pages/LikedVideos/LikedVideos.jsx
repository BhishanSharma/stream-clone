import Sidebar from "../../components/Sidebar.jsx";
import Video from "../../components/Video.jsx";
import { useNavigate } from "react-router-dom";
import './LikedVideos.css';

const likedVideos = [
  {
    id: 501,
    title: "Top 10 React Tips",
    thumbnail: "https://i.ytimg.com/vi/cF2lQ_gZeA8/maxresdefault.jpg",
    creator: "Codevolution",
    views: 89000,
    old: "2 weeks",
  },
  {
    id: 502,
    title: "JavaScript Design Patterns",
    thumbnail: "https://i.ytimg.com/vi/TV88lp6g4_U/maxresdefault.jpg",
    creator: "Fireship",
    views: 129000,
    old: "1 month",
  },
  {
    id: 503,
    title: "Linux Commands for Developers",
    thumbnail: "https://i.ytimg.com/vi/ROjZy1WbCIA/maxresdefault.jpg",
    creator: "TechWorld with Nana",
    views: 43000,
    old: "3 weeks",
  },
];

function LikedVideos() {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="liked-videos-page">
      <Sidebar />
      <div className="liked-videos-container">
        {likedVideos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            creator={video.creator}
            views={video.views}
            old={video.old}
            onClick={() => handleVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default LikedVideos;
