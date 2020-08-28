import React from "react";

import { ImageListContainer, ImageGrid } from "./styles";

const ImageList = ({ title, images }) => {
  return (
    <ImageListContainer>
      <h2>{title}</h2>
      <ImageGrid>
        {images &&
          images.length > 0 &&
          images.map((image) => (
            <img key={image.id} src={image.imageUrl} alt={image.title} />
          ))}
      </ImageGrid>
    </ImageListContainer>
  );
};

export default ImageList;
