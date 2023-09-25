import React from 'react';

const DisplayImage = ({ images }) => {
  console.log(images);

  return (
    <div>
      <div className="image-container">
        {images && images.length > 0 ? (
          images.map((img, index) => (
            <img
              src={URL.createObjectURL(img.image)}
              alt={`image-${index}`}
              key={index}
              className="uploaded-image"
              width="50px"
            />
          ))
        ) : (
          <p>No images to display</p>
        )}
      </div>
    </div>
  );
}

export default DisplayImage;
