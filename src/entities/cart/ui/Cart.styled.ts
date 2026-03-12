import styled from "@emotion/styled";

export const Card = styled.li`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background: #fff;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

export const CardId = styled.span`
  font-weight: 600;
  color: #333;
`;

export const CardMeta = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

export const CardTotal = styled.strong`
  color: #28a745;
  font-size: 18px;
`;
