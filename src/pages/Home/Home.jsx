import React from 'react';
import Header from "../../components/Header.jsx";
import Video from "../../components/Video.jsx";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const videos = [
    { id: 1, title: "Video 1", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
    { id: 2, title: "Video 2", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
    { id: 3, title: "Video 3", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
    { id: 4, title: "Video 4", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
    { id: 5, title: "Video 5", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
    { id: 6, title: "Video 6", thumbnail: "https://i.ytimg.com/vi/zRGMucH1hVs/hq720.jpg" },
  ];

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          padding: "20px",
          gap: "16px",
        }}
      >
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            onClick={() => handleVideoClick(video.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
