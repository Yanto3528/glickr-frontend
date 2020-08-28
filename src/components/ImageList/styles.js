import styled from "styled-components";

export const ImageListContainer = styled.div`
  margin-top: 20px;
  > h2 {
    margin-bottom: 10px;
  }
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: flex-start;
  img {
    border-radius: 5px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
