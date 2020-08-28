import React from "react";

import { SpinnerContainer, Spinner } from "./styles";

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      loop: Infinity,
      ease: "linear",
    },
  },
};

const LoadingIcon = (props) => {
  return (
    <SpinnerContainer>
      <Spinner variants={spinnerVariants} animate="animate" />
    </SpinnerContainer>
  );
};

export default LoadingIcon;
