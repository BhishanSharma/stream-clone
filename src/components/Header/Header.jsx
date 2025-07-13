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
        padding: "0 20px",
        height: "10%",
      }}
    >
      <h2
        style={{ margin: '0 20px', color: "#fff", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        SZ
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
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

        <img
          src="https://i.pravatar.cc/36"
          alt="Profile"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
