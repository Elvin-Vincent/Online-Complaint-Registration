import React, { useState } from 'react';
import DisplayImage from './DisplayImage';
import './UploadImage.css'; 

function UploadImage({ onValueChange }) {
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);

  const addImage = () => {
    onValueChange([...images, { image }]);
    setImages([...images, { image }]);
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button id="submitBtn" onClick={addImage}>
        Upload
      </button>
      <br />
      <div className="display-image">
        <DisplayImage images={images} />
      </div>
    </div>
  );
}

export default UploadImage;
