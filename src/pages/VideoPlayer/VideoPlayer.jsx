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

  if (!video) return <h2>Video not found</h2>;

  return (
    <>
      <Header />
      <div className="player-container">
        <h2>{video.title}</h2>
        <video width="100%" height="auto" controls autoPlay>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default VideoPlayer;
