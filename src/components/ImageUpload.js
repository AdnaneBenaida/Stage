import React, { useState } from 'react';

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Do something with the selected file (this.state.file)
    console.log('Handle uploading -', file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(selectedFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  const imagePreview = imagePreviewUrl ? (
    <img src={imagePreviewUrl} alt="Preview" />
  ) : (
    <div className="previewText">Please select an Image for Preview</div>
  );

  return (
    <div className="previewComponent">
      <form onSubmit={handleSubmit}>
        <input
          className="fileInput"
          type="file"
          onChange={handleImageChange}
        />
        <button className="submitButton" type="submit">
          Upload Image
        </button>
      </form>
      <div className="imgPreview">{imagePreview}</div>
    </div>
  );
}

export default ImageUpload;
