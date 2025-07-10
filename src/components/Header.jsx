import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2 style={{ margin: 0, color: "#FF0000", cursor: "pointer" }} onClick={() => navigate("/")}>
        SZ
      </h2>

      <button
        onClick={() => navigate("/upload")}
        style={{
          padding: "8px 16px",
          backgroundColor: "#FF0000",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Upload
      </button>
    </div>
  );
}

export default Header;
