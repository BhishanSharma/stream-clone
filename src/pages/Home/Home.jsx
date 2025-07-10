import React from 'react';
import Header from "../../components/Header.jsx";
import Video from "../../components/Video.jsx";

function Home() {
  const videos = [
    { id: 1, title: "Video 1", thumbnail: "https://via.placeholder.com/150" },
    { id: 2, title: "Video 2", thumbnail: "https://via.placeholder.com/150" },
    { id: 3, title: "Video 3", thumbnail: "https://via.placeholder.com/150" },
    { id: 4, title: "Video 4", thumbnail: "https://via.placeholder.com/150" },
    { id: 5, title: "Video 5", thumbnail: "https://via.placeholder.com/150" },
    { id: 6, title: "Video 6", thumbnail: "https://via.placeholder.com/150" },
  ];

  const playVideo = (video) => {
    console.log("Play:", video.title);
  };

  return (
    <>
      <Header />
      <div className="video-grid">
        {videos.map((video) => (
          <Video
            key={video.id}
            thumbnail={video.thumbnail}
            title={video.title}
            onClick={() => playVideo(video)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
