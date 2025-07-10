import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

const allVideos = [
  { id: 1, title: "React Basics", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "Advanced React", videoUrl: "https://www.w3schools.com/html/movie.mp4" },
];

function VideoPlayer() {
  const { id } = useParams();
  const video = allVideos.find(v => v.id === parseInt(id));

  if (!video) return <h2 style={{ padding: "20px" }}>Video not found</h2>;

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          maxWidth: "1000px",
          margin: "20px auto",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "15px", color: "#0f0f0f" }}>{video.title}</h2>
        <video
          style={{ width: "100%", borderRadius: "8px" }}
          controls
          autoPlay
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoPlayer;
