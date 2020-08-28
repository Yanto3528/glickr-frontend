import React from "react";
import PropTypes from "prop-types";

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
          data-testid="prev"
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
          data-testid="next"
        >
          <AiOutlineRight size="8rem" color="white" />
        </RightArrow>
      );
    }
  };

  return (
    <Backdrop onClick={onClose} data-testid="backdrop">
      {renderLeftArrow()}
      <ImageContainer onClick={(e) => e.stopPropagation()}>
        <img src={images[index].imageUrl} alt={images[index].title} />
      </ImageContainer>
      {renderRightArrow()}
      <CloseIcon
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        data-testid="close"
      >
        <AiOutlineClose size="4rem" color="white" />
      </CloseIcon>
    </Backdrop>
  );
};

Image.propTypes = {
  images: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Image;
