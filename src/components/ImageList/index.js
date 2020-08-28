import React from "react";

import { ImageListContainer, ImageGrid } from "./styles";

const ImageList = ({ title }) => {
  return (
    <ImageListContainer>
      <h2>{title}</h2>
      <ImageGrid>
        <img
          src="https://images.unsplash.com/photo-1598561315145-2dc34dce561d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
          // alt="image"
        />
      </ImageGrid>
    </ImageListContainer>
  );
};

export default ImageList;
