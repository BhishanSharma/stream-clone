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
    e.target.reset(); // resets file inputs
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Upload Video</h2>

        <form onSubmit={handleUpload}>
          {/* Title Input */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter video title"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc"
              }}
            />
          </div>

          {/* Thumbnail Input */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              style={{ display: "block", width: "100%" }}
            />
            {imageFile && (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Thumbnail Preview"
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                  marginTop: "10px",
                  borderRadius: "4px"
                }}
              />
            )}
          </div>

          {/* Video File Input */}
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              style={{ display: "block", width: "100%" }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#FF0000",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
