import styled from "@emotion/styled";

export const ContainerPagination = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 24px 0;
`;

export const ButtonPagination = styled.button<{
  $active?: boolean;
  $disabled?: boolean;
}>`
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid ${({ $active }) => ($active ? "#007bff" : "#ccc")};
  background: ${({ $active }) => ($active ? "#007bff" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  border-radius: 6px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
  transition: all 0.2s;
  text-align: center;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#0056b3" : "#f0f0f0")};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Ellipsis = styled.span`
  color: #666;
  padding: 0 4px;
`;

export const Info = styled.span`
  color: #666;
  font-size: 14px;
  margin: 0 16px;
`;
