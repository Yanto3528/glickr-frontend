import styled from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: ${({ center }) => (center ? "center" : "left")};
  margin: ${({ margin }) => margin};
`;
