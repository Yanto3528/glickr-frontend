import styled from "styled-components";

export const SearchbarContainer = styled.div``;
export const SearchbarInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-radius: 5px;
  padding: 15px 20px;
`;
