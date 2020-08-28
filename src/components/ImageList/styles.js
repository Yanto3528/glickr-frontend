import styled from "styled-components";
import { motion } from "framer-motion";

export const ImageListContainer = styled.div`
  margin-top: 20px;
  > h2 {
    margin-bottom: 10px;
  }
`;
export const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: flex-start;
  img {
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: cover;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;
