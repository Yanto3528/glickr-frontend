import styled from "styled-components";
import { motion } from "framer-motion";

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const Spinner = styled(motion.span)`
  display: inline-block;
  width: ${({ size }) => (size ? size : "50px")};
  height: ${({ size }) => (size ? size : "50px")};
  border: 5px solid ${({ theme }) => theme.darkgrey};
  border-top-color: transparent;
  border-radius: 50%;
`;
