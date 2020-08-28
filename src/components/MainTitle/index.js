import React from "react";

import { MainTitleContainer } from "./styles";

const MainTitle = ({ title, subtitle }) => {
  return (
    <MainTitleContainer>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </MainTitleContainer>
  );
};

export default MainTitle;
