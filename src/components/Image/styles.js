import styled, { css } from "styled-components";

const baseArrowStyles = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  max-width: 70%;
  max-height: 100%;
  img {
    width: 100%;
  }
`;

export const LeftArrow = styled.div`
  ${baseArrowStyles}
  left: 0;
`;

export const RightArrow = styled.div`
  ${baseArrowStyles}
  right: 0;
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
