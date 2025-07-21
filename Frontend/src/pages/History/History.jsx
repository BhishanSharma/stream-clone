import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../components/Video/Video.jsx";
import "./History.css";
import axios from "axios";

function History() {
  const navigate = useNavigate();
  const [watchedVideos, setWatchedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleVideoClick = (id) => {
    navigate(`/watch/${id}`);
  };
  
  function getRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = (now - date) / 1000; // in seconds

    if (diff < 60) return "just now";
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

    return `${Math.floor(diff / 604800)} weeks ago`;
  }

  useEffect(() => {
    const fetchWatchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/users/history", {
          withCredentials: true,
        });
        
        console.log(res.data?.data);
        setWatchedVideos(res.data?.data || []);
      } catch (err) {
        console.error("Error fetching watch history", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchHistory();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="your-videos-container">
      {watchedVideos.length > 0 ? (
        watchedVideos.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            thumbnail={video.thumbnail}
            creator={video.owner?.fullname || video.owner?.username}
            views={video.views}
            old={getRelativeTime(video.createdAt)}
            onClick={() => handleVideoClick(video._id)}
          />
        ))
      ) : (
        <p>No watch history found.</p>
      )}
    </div>
  );
}

export default History;
