import React from "react";

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

export default MainTitle;
