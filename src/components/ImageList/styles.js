import styled from "styled-components";

export const ImageListContainer = styled.div`
  margin-top: 20px;
  > h2 {
    margin-bottom: 10px;
  }
`;
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  align-items: flex-start;
  img {
    border-radius: 5px;
    width: 100%;
    object-fit: contain;
  }
`;
