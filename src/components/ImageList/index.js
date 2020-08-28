import React from "react";
import PropTypes from "prop-types";

import { ImageListContainer, ImageGrid } from "./styles";

const ImageList = React.forwardRef(
  ({ title, images, loading, setCurrentImageIndex }, ref) => {
    return (
      <ImageListContainer>
        <h2>{title}</h2>
        {images.length === 0 && !loading && (
          <h2 style={{ textAlign: "center", margin: "20px 0" }}>
            No images found.
          </h2>
        )}
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
                    onClick={() => setCurrentImageIndex(index)}
                  />
                );
              } else {
                return (
                  <img
                    key={image.id}
                    src={image.imageUrl}
                    alt={image.title}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                );
              }
            })}
        </ImageGrid>
      </ImageListContainer>
    );
  }
);

ImageList.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  setCurrentImageIndex: PropTypes.func.isRequired,
};

export default React.memo(ImageList);
