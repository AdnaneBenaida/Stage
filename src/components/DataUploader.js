import React, { useState } from 'react';
import Audio from "../components/Audio";
import ImageUpload from "../components/ImageUpload";
import axios from 'axios'; // Import the axios library

function DataUploader() {
  const [audioBlob, setAudioBlob] = useState(null);
  const [imageBlob, setImageBlob] = useState(null);

  const handleAudioRecordingComplete = (blob) => {
    setAudioBlob(blob);
  };

  const handleImageUploadComplete = (blob) => {
    setImageBlob(blob);
  };

  const handleUpload = () => {
    if (audioBlob && imageBlob) {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'audio.wav');
      formData.append('image', imageBlob, 'image.jpg');

      axios
        .post('YOUR_API_ENDPOINT', formData)
        .then((response) => {
          console.log('Upload successful:', response.data);
          // Reset the state if needed
          setAudioBlob(null);
          setImageBlob(null);
        })
        .catch((error) => {
          console.error('Upload error:', error);
        });
    }
  };

  return (
    <div>
      <Audio onRecordingComplete={handleAudioRecordingComplete} />
      <ImageUpload onImageUploadComplete={handleImageUploadComplete} />
      <button onClick={handleUpload}>Upload Data</button>
    </div>
  );
}

export default DataUploader;
