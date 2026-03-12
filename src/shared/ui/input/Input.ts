import styled from "@emotion/styled";

export const Input = styled.input`
  width: 50px;
  text-align: center;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: 2px solid #007bff;
    border-color: transparent;
  }
`;