import Video from "../../components/Video.jsx";
import { useNavigate } from 'react-router-dom';
import { videos } from "../Home/data.js";

function DefaultVideos() {
  const navigate = useNavigate();

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div style={{
      height: "100%",
      flex: 1,
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      overflowY: 'scroll',
      padding: "30px"
    }}>
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
