import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Video from "../../components/Video/Video.jsx";
import "./DefaultVideos.css";

function DefaultVideos() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/videos/getAll", {
          withCredentials: true,
        });

        setVideos(res.data?.data || []);
      } catch (error) {
        console.error("❌ Failed to fetch videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className="default-videos-container">
      {videos.map((video) => (
        <Video
          key={video._id}
          id={video._id}
          title={video.title}
          thumbnail={video.thumbnail}
          creator={video.owner?.username || "Unknown"}
          views={video.views}
          old={new Date(video.createdAt).toLocaleDateString()}
          onClick={() => handleVideoClick(video._id)}
        />
      ))}
    </div>
  );
}

export default DefaultVideos;
