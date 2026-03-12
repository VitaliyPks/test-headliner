import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useNavigateToCart = () => {
  const navigate = useNavigate();

  return useCallback(
    (cartId: number) => {
      navigate(`/carts/${cartId}`);
    },
    [navigate],
  );
};
