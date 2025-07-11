import React, { useState } from 'react';
import Header from "../../components/Header.jsx";

function UploadPage() {
  const [title, setTitle] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !videoFile) {
      alert("Please add both title and video file.");
      return;
    }

    // Simulate upload
    console.log("Uploading:", {
      title,
      videoFile,
      imageFile,
    });

    alert("Video uploaded successfully (simulated)!");

    // Reset form
    setTitle('');
    setVideoFile(null);
    setImageFile(null);
    e.target.reset();
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />

      <div
        style={{
          maxWidth: "720px",
          margin: "40px auto",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "30px",
            fontSize: "24px",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
            color: "#202020"
          }}
        >
          Upload Your Video
        </h2>

        <form onSubmit={handleUpload}>

          {/* Title Field */}
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. My First Vlog"
              style={inputStyle}
            />
          </div>

          {/* Thumbnail Upload */}
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              style={fileInputStyle}
            />
            {imageFile && (
              <div
                style={{
                  marginTop: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}
              >
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Thumbnail Preview"
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                />
              </div>
            )}
          </div>

          {/* Video File Upload */}
          <div style={{ marginBottom: "25px" }}>
            <label style={labelStyle}>Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              style={fileInputStyle}
            />
          </div>

          {/* Upload Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 20px",
              backgroundColor: "#FF0000",
              color: "#fff",
              fontSize: "16px",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#cc0000"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#FF0000"}
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "500",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "15px",
};

const fileInputStyle = {
  width: "100%",
  padding: "8px",
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default UploadPage;
