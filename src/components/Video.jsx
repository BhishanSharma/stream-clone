import React from 'react';

function Video({ title, thumbnail, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "300px",
        cursor: "pointer",
        backgroundColor: "#fff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={thumbnail}
        alt={title}
        style={{ width: "100%", height: "170px", objectFit: "cover" }}
      />
      <div style={{ padding: "10px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "500", margin: 0 }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

export default Video;
