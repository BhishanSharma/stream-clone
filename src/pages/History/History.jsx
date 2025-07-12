import React from "react";
import Sidebar from "../../components/Sidebar.jsx";
import "./History.css";

const historyVideos = [
  {
    id: 1,
    title: "Understanding React Hooks",
    thumbnail: "https://i.ytimg.com/vi/dpw9EHDh2bM/hqdefault.jpg",
    creator: "Bhishan Sharma",
    views: 15200,
    old: "2 days ago"
  },
  {
    id: 2,
    title: "Mastering Redux in 2024",
    thumbnail: "https://i.ytimg.com/vi/poQXNp9ItL4/hqdefault.jpg",
    creator: "Bhishan Sharma",
    views: 9840,
    old: "1 week ago"
  }
];

function History() {
  return (
    <div className="history-page">
      <Sidebar />
      <div className="history-content">
        <h2 className="history-heading">Watch History</h2>
        {historyVideos.map((video) => (
          <div key={video.id} className="history-video-card">
            <img src={video.thumbnail} alt={video.title} className="history-thumbnail" />
            <div className="history-video-info">
              <h3 className="history-video-title">{video.title}</h3>
              <p className="history-video-meta">
                {video.creator} • {video.views.toLocaleString()} views • {video.old}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
