import styled from "@emotion/styled";

import { Button } from "@shared/ui";

export const Container = styled.div`
  padding: 24px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;

  h1 {
    font-size: 24px;
    margin: 0 0 8px;
    color: #333;
  }

  .meta {
    color: #666;
    font-size: 16px;
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProductItem = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #fff;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ProductInfo = styled.div`
  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .price {
    color: #666;
    font-size: 16px;
    margin-bottom: 16px;
  }
`;

export const ProductTotal = styled.strong`
  color: #28a745;
  font-size: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 2px solid #e0e0e0;
  font-size: 18px;

  .total-label {
    color: #666;
    font-size: 18px;
  }

  .total-value {
    color: #28a745;
    font-weight: 700;
    font-size: 24px;
  }
`;

export const BackButton = styled(Button)`
  margin-bottom: 16px;
  background: #d1d2d6;
`;
