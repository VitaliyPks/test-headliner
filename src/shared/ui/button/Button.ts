import styled from "@emotion/styled";

export const Button = styled.button<{ $loading?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: ${({ $loading }) => ($loading ? "wait" : "pointer")};
  font-weight: 500;
  transition: background 0.2s;
  padding: 6px 12px;
  text-align: center;

  &:hover:not(:disabled) {
    background: #f0f0f0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
