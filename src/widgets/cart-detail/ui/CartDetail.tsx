import { useEffect } from "react";

import {
  BackButton,
  Container,
  Footer,
  Header,
  ProductInfo,
  ProductItem,
  ProductsList,
  ProductTotal,
} from "./CartDetail.styled";

import { useCartStore, useSetCartDetails } from "@entities/cart";

import { RemoveCartItemButton } from "@features/remove-cart-item";
import { QuantityUpdater } from "@features/update-cart-item";

import { ErrorState, Loader } from "@shared/ui";

import { useCartDetailHook } from "../lib";

interface ICartDetailProps {
  cartId: number;
  onBack?: () => void;
}

export const CartDetail = ({ cartId, onBack }: ICartDetailProps) => {
  const setCartDetalis = useSetCartDetails();
  const { cartsData } = useCartStore();

  const { data, isError, isLoading } = useCartDetailHook({ cartId });

  useEffect(() => {
    if (data && !cartsData.details[cartId]) {
      setCartDetalis(data);
    }
  }, [data, cartId, cartsData.details]);

  if (isLoading) return <Loader fullScreen />;
  if (isError) return <ErrorState message="Не удалось загрузить корзину" />;

  const cart = cartsData.details[cartId];

  if (!cart) return null;

  return (
    <Container>
      {onBack && <BackButton onClick={onBack}>← Назад</BackButton>}

      <Header>
        <h1>Корзина #{cart.id}</h1>
        <div className="meta">Пользователь: {cart.userId}</div>
      </Header>

      <ProductsList>
        {cart.products.map((product) => (
          <ProductItem key={product.id}>
            <ProductInfo>
              <div className="title">{product.title}</div>
              <div className="price">
                ${product.price.toFixed(2)} × {product.quantity}
              </div>
            </ProductInfo>

            <QuantityUpdater
              cartId={cart.id}
              productId={product.id}
              quantity={product.quantity}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                alignItems: "flex-end",
              }}
            >
              <ProductTotal>${product.total.toFixed(2)}</ProductTotal>
              <RemoveCartItemButton cartId={cart.id} productId={product.id} />
            </div>
          </ProductItem>
        ))}
      </ProductsList>

      <Footer>
        <span className="total-label">Сумма:</span>
        <span className="total-value">${cart.total.toFixed(2)}</span>
      </Footer>
    </Container>
  );
};
