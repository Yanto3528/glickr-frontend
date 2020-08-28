import React from "react";

import { ImageListContainer, ImageGrid } from "./styles";

const ImageList = React.forwardRef(({ title, images }, ref) => {
  return (
    <ImageListContainer>
      <h2>{title}</h2>
      <ImageGrid>
        {images &&
          images.length > 0 &&
          images.map((image, index) => {
            if (images.length === index + 1) {
              return (
                <img
                  key={image.id}
                  src={image.imageUrl}
                  alt={image.title}
                  ref={ref}
                />
              );
            } else {
              return (
                <img key={image.id} src={image.imageUrl} alt={image.title} />
              );
            }
          })}
      </ImageGrid>
    </ImageListContainer>
  );
});

export default ImageList;
