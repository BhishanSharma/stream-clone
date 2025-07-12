import { useState } from 'react';
import './UploadPage.css';

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

    console.log("Uploading:", {
      title,
      videoFile,
      imageFile,
    });

    alert("Video uploaded successfully (simulated)!");

    setTitle('');
    setVideoFile(null);
    setImageFile(null);
    e.target.reset();
  };

  return (
    <div className="upload-container">
      <h2>Upload Your Video</h2>
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

        <button type="submit" className="upload-button">
          Upload Video
        </button>
      </form>
    </div>
  );
}

export default UploadPage;
