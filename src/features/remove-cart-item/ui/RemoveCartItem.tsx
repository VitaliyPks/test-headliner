import { useRemoveCartItem } from "@entities/cart";

import { Button } from "@shared/ui";

interface Props {
  cartId: number;
  productId: number;
}

export const RemoveCartItemButton = ({ cartId, productId }: Props) => {
  const removeCartItem = useRemoveCartItem();

  const handleClick = () => {
    if (window.confirm("Удалить товар из корзины?")) {
      removeCartItem(cartId, productId);
    }
  };

  return <Button onClick={handleClick}>{"Удалить"}</Button>;
};
