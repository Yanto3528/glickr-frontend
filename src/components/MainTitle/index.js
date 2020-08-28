import React from "react";
import PropTypes from "prop-types";

import { MainTitleContainer } from "./styles";
import { Logo } from "../../styles/shared/Logo";

const MainTitle = ({ title }) => {
  return (
    <MainTitleContainer>
      <Logo>Glickr</Logo>
      <p>{title}</p>
    </MainTitleContainer>
  );
};

MainTitle.propTypes = {
  title: PropTypes.string,
};

export default MainTitle;
