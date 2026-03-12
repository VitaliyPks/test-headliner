import { useMutation } from "@tanstack/react-query";

import { API_BASE } from "../model/constants";

export const useUpdateCart = () => {
  return useMutation({
    mutationFn: async ({
      id,
      products,
    }: {
      id: number;
      products: Array<{ id: number; quantity: number }>;
    }) => {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ merge: true, products }),
      });
      if (!res.ok) throw new Error("Ошибка изменения корзины");
      return res.json();
    },
  });
};
