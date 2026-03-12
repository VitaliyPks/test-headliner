import { Card, CardHeader, CardId, CardMeta, CardTotal } from "./Cart.styled";

import { TCart } from "../model";

interface ICartProps {
  cart: TCart;
  onCartClick: (id: number) => void;
}

export const Cart = ({ cart, onCartClick }: ICartProps) => {
  return (
    <Card onClick={() => onCartClick(cart.id)}>
      <CardHeader>
        <CardId>Корзина №{cart.id}</CardId>
        <CardTotal>Сумма ${cart.total.toFixed(2)}</CardTotal>
      </CardHeader>

      <CardMeta>
        <span>Пользователь: №{cart.userId}</span>
        <span>Товары: {cart.products.length}</span>
        <span>
          Количество товаров:{" "}
          {cart.products.reduce((sum, p) => sum + p.quantity, 0)}
        </span>
      </CardMeta>
    </Card>
  );
};
