import Video from "../../components/Video.jsx";
import { useNavigate } from 'react-router-dom';
import { videos } from "../Home/data.js";
import "./DefaultVideos.css"

function DefaultVideos() {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className="default-videos-container">
      {videos.map((video) => (
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

export default DefaultVideos;
