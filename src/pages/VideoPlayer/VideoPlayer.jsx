import { useParams } from 'react-router-dom';
import './VideoPlayer.css';
import { useRef, useState, useEffect } from 'react';

const allVideos = [
  {
    id: 1,
    title: "React Basics",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    creator: "Bhishan Sharma",
    views: 5200,
    createdAt: "2024-07-09T12:00:00Z",
    description: "Learn React basics in under 10 minutes with this beginner-friendly guide!"
  },
  {
    id: 2,
    title: "Advanced React",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    creator: "Bhishan Sharma",
    views: 15400,
    createdAt: "2024-07-07T10:30:00Z",
    description: "Dive deeper into advanced concepts like hooks, context API, and performance tuning."
  },
];

function formatViews(views) {
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M';
  if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K';
  return views.toString();
}

function timeAgo(dateString) {
  const diff = Math.floor((new Date() - new Date(dateString)) / 1000);
  const intervals = [
    { label: 'year', secs: 31536000 },
    { label: 'month', secs: 2592000 },
    { label: 'week', secs: 604800 },
    { label: 'day', secs: 86400 },
    { label: 'hour', secs: 3600 },
    { label: 'minute', secs: 60 },
    { label: 'second', secs: 1 },
  ];
  for (const interval of intervals) {
    const count = Math.floor(diff / interval.secs);
    if (count > 0) return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
  }
  return 'just now';
}

function VideoPlayer() {
  const { id } = useParams();
  const video = allVideos.find(v => v.id === parseInt(id));
  const videoRef = useRef(null);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.play();
  }, []);

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments(prev => [...prev, { text: comment, time: new Date() }]);
      setComment("");
    }
  };

  if (!video) return <h2 className="video-not-found">Video not found</h2>;

  return (
    <div className="video-page">
      <div className="video-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video-player"
            src={video.videoUrl}
            controls
            autoPlay
          />
        </div>

        <h2 className="video-title">{video.title}</h2>

        <div className="video-info">
          <div className="channel-info">
            <div className="creator-icon">B</div>
            <div>
              <h4 className="creator-name">{video.creator}</h4>
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>

          <div className="video-stats">
            <span>{formatViews(video.views)} views • {timeAgo(video.createdAt)}</span>
            <div className="video-actions">
              <button>👍 Like</button>
              <button>🔗 Share</button>
              <button>⬇️ Download</button>
            </div>
          </div>
        </div>

        <p className="video-description">{video.description}</p>

        <div className="comments-section">
          <h3>{comments.length} Comments</h3>

          <div className="add-comment">
            <div className="comment-avatar">B</div>
            <input
              className="comment-input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddComment();
              }}
            />
            <button className="comment-post-btn" onClick={handleAddComment}>Post</button>
          </div>

          <div className="comment-list">
            {comments.map((c, i) => (
              <div key={i} className="comment">
                <div className="comment-avatar">B</div>
                <div className="comment-body">
                  <div className="comment-header">
                    <span className="comment-author">You</span> • <span className="comment-time">{timeAgo(c.time)}</span>
                  </div>
                  <div className="comment-text">{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
