import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Overlay = styled.div<{ $fullScreen?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $fullScreen }) => ($fullScreen ? "60px" : "24px")};
  ${({ $fullScreen }) =>
    $fullScreen
      ? `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,0.8);
    z-index: 1000;
  `
      : ""}
`;
