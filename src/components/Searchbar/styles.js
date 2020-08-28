import styled from "styled-components";

export const SearchbarForm = styled.form`
  position: relative;
`;
export const SearchbarInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-radius: 5px;
  padding: 15px 20px;
`;

export const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 47px;
  height: 47px;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;
