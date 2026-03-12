export interface IPaginationState {
  limit: number;
  page: number;
  skip: number;
}

export interface ICartState {
  pagination: IPaginationState;
  cartsData: {
    list: TCart[] | null;
    listMeta: { total: number; skip: number; limit: number } | null;
    details: Record<number, TCart>;
  };
  setPagination: (params: Partial<IPaginationState>) => void;
  setPage: (page: number) => void;
  setCartsList: (
    carts: TCart[],
    meta: { total: number; skip: number; limit: number },
  ) => void;
  setCartDetails: (cart: TCart) => void;
  updateCartItem: (cartId: number, productId: number, data: TCart) => void;
  removeCartItem: (cartId: number, productId: number) => void;
}

export type TCart = {
  id: number;
  userId: number;
  products: Array<{
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
  }>;
  total: number;
  totalQuantity: number;
  totalProducts: number;
};

export type TCartsResponse = {
  carts: TCart[];
  total: number;
  limit: number;
  skip: number;
};
