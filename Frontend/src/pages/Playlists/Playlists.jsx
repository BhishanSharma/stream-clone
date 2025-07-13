import Video from "../../components/Video/Video.jsx";
import { useNavigate } from "react-router-dom";
import './Playlists.css';

const playlistVideos = [
  {
    id: 301,
    title: "Frontend Mastery",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
    creator: "Bhishan Sharma",
    views: 123000,
    old: "3 months",
  },
  {
    id: 302,
    title: "Backend Bootcamp",
    thumbnail: "https://i.ytimg.com/vi/ldwlOzRvYOU/maxresdefault.jpg",
    creator: "Bhishan Sharma",
    views: 96000,
    old: "5 weeks",
  },
  {
    id: 303,
    title: "Fullstack Project Walkthrough",
    thumbnail: "https://i.ytimg.com/vi/ktjafK4SgWM/maxresdefault.jpg",
    creator: "Bhishan Sharma",
    views: 55000,
    old: "1 week",
  },
];

function Playlists() {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="playlists-page">
      <div className="playlists-container">
        {playlistVideos.map((video) => (
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

export default Playlists;
