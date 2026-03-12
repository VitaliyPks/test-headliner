import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ICartState, TCart } from "./types";
import { deepEqual } from "@shared/lib";
import { recalculateCartTotals, updateCartInList } from "./utils";

export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      pagination: { page: 1, limit: 10, skip: 0 },
      cartsData: {
        list: null,
        listMeta: null,
        details: {},
      },
      setPagination: (params) => {
        set((state) => {
          const newPagination = { ...state.pagination, ...params };
          const skip = (newPagination.page - 1) * newPagination.limit;
          return { pagination: { ...newPagination, skip } };
        });
      },
      setPage: (page) => {
        const { limit } = get().pagination;
        set((state) => ({
          pagination: { ...state.pagination, page, skip: (page - 1) * limit },
        }));
      },

      setCartsList: (incomingCarts, meta) =>
        set((state) => {
          const existingList = state.cartsData.list || [];

          if (
            existingList.length === 0 ||
            existingList.length !== incomingCarts.length
          ) {
            return {
              cartsData: {
                ...state.cartsData,
                list: incomingCarts,
                listMeta: meta,
              },
            };
          }

          const mergedList = incomingCarts.map((newCart, index) => {
            const existingCart = existingList[index];

            if (!existingCart) return newCart;

            if (existingCart.id !== newCart.id) return newCart;

            if (deepEqual(existingCart, newCart)) {
              return newCart;
            }

            return existingCart;
          });

          return {
            cartsData: {
              ...state.cartsData,
              list: mergedList,
              listMeta: meta,
            },
          };
        }),
      setCartDetails: (cart) =>
        set((state) => ({
          cartsData: {
            ...state.cartsData,
            details: {
              ...state.cartsData.details,
              [cart.id]: cart,
            },
          },
        })),
      updateCartItem: (cartId, productId, data) =>
        set((state) => {
          const cart = state.cartsData.details[cartId];
          if (!cart) return state;

          const newProduct = data.products.find(
            (prod) => prod.id === productId,
          );
          if (!newProduct) return state;

          const updatedProducts = cart.products.map((p) =>
            p.id === productId ? newProduct : p,
          );

          const updatedCart = recalculateCartTotals({
            ...cart,
            products: updatedProducts,
          });

          return {
            cartsData: {
              ...state.cartsData,
              details: {
                ...state.cartsData.details,
                [cartId]: updatedCart,
              },
              list: updateCartInList(state.cartsData.list, updatedCart),
            },
          };
        }),
      removeCartItem: (cartId, productId) =>
        set((state) => {
          const cart = state.cartsData.details[cartId];
          if (!cart) return state;

          const updatedProducts = cart.products.filter(
            (p) => p.id !== productId,
          );

          const updatedCart = recalculateCartTotals({
            ...cart,
            products: updatedProducts,
          });

          return {
            cartsData: {
              ...state.cartsData,
              details: {
                ...state.cartsData.details,
                [cartId]: updatedCart,
              },
              list: updateCartInList(state.cartsData.list, updatedCart),
            },
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        pagination: state.pagination,
        cartsData: {
          details: state.cartsData.details,
          list: state.cartsData.list,
          listMeta: state.cartsData.listMeta,
        },
      }),
    },
  ),
);

export const useCartDetails = (id: number) =>
  useCartStore((state) => state.cartsData.details[id]);

export const useUpdateCartItem = () =>
  useCartStore((state) => state.updateCartItem);

export const useRemoveCartItem = () =>
  useCartStore((state) => state.removeCartItem);

export const useSetCartDetails = () =>
  useCartStore((state) => state.setCartDetails);

export const useSetCartList = () => useCartStore((state) => state.setCartsList);
