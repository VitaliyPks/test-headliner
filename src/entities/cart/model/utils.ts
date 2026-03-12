import type { TCart } from "./types";

export const recalculateCartTotals = (cart: TCart): TCart => {
  const updatedTotal = cart.products.reduce((sum, p) => sum + p.total, 0);
  const updatedTotalQuantity = cart.products.reduce(
    (sum, p) => sum + p.quantity,
    0,
  );

  return {
    ...cart,
    total: updatedTotal,
    totalQuantity: updatedTotalQuantity,
    totalProducts: cart.products.length,
  };
};

export const updateCartInList = (
  list: TCart[] | null,
  updatedCart: TCart,
): TCart[] | null => {
  if (!list) return null;
  return list.map((c) => (c.id === updatedCart.id ? updatedCart : c));
};
