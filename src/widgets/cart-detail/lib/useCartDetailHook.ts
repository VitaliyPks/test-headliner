import { API_BASE } from "@entities/cart/model/constants";
import { useQuery } from "@tanstack/react-query";

import { TCart } from "@entities/cart";

export const useCartDetailHook = ({ cartId }) => {
  const { data, isLoading, isError } = useQuery<TCart>({
    queryKey: ["cart", cartId],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/${cartId}`);
      if (!res.ok) throw new Error("Ошибка закругки корзины");
      return res.json();
    },
    enabled: !!cartId,
  });

  return { data, isLoading, isError };
};
