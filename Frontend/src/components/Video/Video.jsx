import './Video.css';

function formatViews(views) {
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M';
  if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K';
  return views.toString();
}

function timeAgo(old) {
  const now = Date.now(); // in ms
  const past = Date.parse(old); // also in ms
  const diff = Math.floor((now - past) / 1000); // in seconds

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

function Video({ id, title, thumbnail, creator, views, old, onClick }) {
  return (
    <div className="video-card" onClick={onClick}>
      <img src={thumbnail} alt={title} className="video-thumbnail" />
      <div className="video-details">
        <h3 className="video-gig-title">{title}</h3>
        <p className="video-meta">
          {creator} • {formatViews(views)} views • {timeAgo(old)}
        </p>
      </div>
    </div>
  );
}

export default Video;
