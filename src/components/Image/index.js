import React from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import {
  Backdrop,
  ImageContainer,
  CloseIcon,
  LeftArrow,
  RightArrow,
} from "./styles";

const Image = ({ images, index, next, prev, onClose }) => {
  const renderLeftArrow = () => {
    if (index > 0) {
      return (
        <LeftArrow
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <AiOutlineLeft size="8rem" color="white" />
        </LeftArrow>
      );
    }
  };

  const renderRightArrow = () => {
    if (index < images.length - 1) {
      return (
        <RightArrow
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <AiOutlineRight size="8rem" color="white" />
        </RightArrow>
      );
    }
  };

  return (
    <Backdrop onClick={onClose}>
      {renderLeftArrow()}
      <ImageContainer onClick={(e) => e.stopPropagation()}>
        <img src={images[index].imageUrl} alt={images[index].title} />
      </ImageContainer>
      {renderRightArrow()}
      <CloseIcon onClick={onClose}>
        <AiOutlineClose size="4rem" color="white" />
      </CloseIcon>
    </Backdrop>
  );
};

export default Image;
