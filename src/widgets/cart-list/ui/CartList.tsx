import { Cart, TCart } from "@entities/cart";
import { EmptyState, List } from "./CartList.styled";

interface ICartListProps {
  carts: TCart[];
  onCartClick: (id: number) => void;
}

export const CartList = ({ carts, onCartClick }: ICartListProps) => {
  if (carts.length === 0) {
    return <EmptyState />;
  }

  return (
    <List>
      {carts.map((cart) => (
        <Cart cart={cart} key={cart.id} onCartClick={onCartClick} />
      ))}
    </List>
  );
};
