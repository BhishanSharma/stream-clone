import Video from "../../components/Video/Video.jsx";
import { useNavigate } from "react-router-dom";
import './YourVideos.css';

const yourUploadedVideos = [
  {
    id: 401,
    title: "My React Portfolio",
    thumbnail: "https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg",
    creator: "You",
    views: 2300,
    old: "4 days",
  },
  {
    id: 402,
    title: "Python Automation Scripts",
    thumbnail: "https://i.ytimg.com/vi/N8G7z8N6rjU/maxresdefault.jpg",
    creator: "You",
    views: 1800,
    old: "1 week",
  },
  {
    id: 403,
    title: "System Design Mini-Series",
    thumbnail: "https://i.ytimg.com/vi/tv-_1er1mWI/maxresdefault.jpg",
    creator: "You",
    views: 6700,
    old: "2 weeks",
  },
];

function YourVideos() {
  const navigate = useNavigate();

  const handleVideoClick = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
      <div className="your-videos-container">
        {yourUploadedVideos.map((video) => (
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
  );
}

export default YourVideos;
