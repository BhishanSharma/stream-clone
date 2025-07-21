import { useState } from 'react';
import axios from 'axios';
import './UploadPage.css';

function UploadPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!title || !videoFile || !imageFile) {
      alert("Please fill in all fields and select both files.");
      return;
    }
    console.log(title, description, videoFile, imageFile);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", videoFile);
    formData.append("thumbnail", imageFile);

    try {
      setLoading(true); // start loading

      const res = await axios.post(
        "http://localhost:5000/api/v1/videos/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      alert("✅ Video uploaded successfully!");
      console.log(res.data);

      setTitle('');
      setDescription('');
      setVideoFile(null);
      setImageFile(null);
      e.target.reset();
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("Upload failed! Check console.");
    } finally {
      setLoading(false); // ✅ stop loading
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Video</h2>

      {loading && <p style={{ color: "#fff" }}>Uploading...</p>}

      <form onSubmit={handleUpload}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. My First Vlog"
            className="text-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. Exploring mountains..."
            className="text-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="file-input"
          />
          {imageFile && (
            <div className="thumbnail-preview">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Thumbnail Preview"
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">Video File</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="file-input"
          />
        </div>

        <button type="submit" className="upload-button" disabled={loading}>
          {loading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}

export default UploadPage;
