import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { TCartsResponse, useCartStore, useSetCartList } from "@entities/cart";
import { API_BASE } from "@entities/cart/model/constants";

export const useCartsListHook = () => {
  const { pagination, setPagination, cartsData } = useCartStore();

  const setCartList = useSetCartList();

  const { limit, skip } = pagination;
  const total = cartsData?.listMeta?.total;

  const { isLoading, isError, error, data } = useQuery<TCartsResponse>({
    queryKey: ["carts", { limit, skip }],
    queryFn: async () => {
      const res = await fetch(`${API_BASE}?limit=${limit}&skip=${skip}`);
      if (!res.ok) throw new Error("Ошибка загрузки корзин");
      return res.json();
    },
    staleTime: 1000 * 60 * 5,
    enabled: !!limit,
  });

  useEffect(() => {
    if (data) {

      setCartList(data.carts, {
        total: data.total,
        limit: data.limit,
        skip: data.skip,
      });
    }
  }, [data, setCartList]);

  return {
    pagination,
    setPagination,
    cartsData,
    total,
    isError,
    error,
    isLoading,
  };
};
