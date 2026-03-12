import { useParams, useNavigate } from "react-router-dom";

import { CartDetail } from "@widgets/cart-detail";

import { ErrorState } from "@shared/ui";

import { Container } from "./CartDetailsPage.styled";

export const CartDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cartId = Number(id);

  if (isNaN(cartId)) {
    return (
      <Container>
        <ErrorState
          message="Invalid cart ID"
          onRetry={() => navigate("/carts")}
        />
      </Container>
    );
  }

  return (
    <Container>
      <CartDetail cartId={cartId} onBack={() => navigate("/carts")} />
    </Container>
  );
};
