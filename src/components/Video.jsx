import React from 'react';

function Video({ id, title, thumbnail, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "300px",
        cursor: "pointer",
        backgroundColor: "#fff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "100%", height: "170px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "500", color: "#333", margin: 0 }}>{title}</h3>
      </div>
    </div>
  );
}

export default Video;
