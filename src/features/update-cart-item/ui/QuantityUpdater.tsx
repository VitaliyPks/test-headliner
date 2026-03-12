import { Button, Input, Loader } from "@shared/ui";

import { Controls } from "./QuantityUpdater.styled";
import { useUpdateCart, useUpdateCartItem } from "@entities/cart";
import { useMutation } from "@tanstack/react-query";
import { API_BASE } from "@entities/cart/model/constants";

interface IQuantityIpdaterProps {
  cartId: number;
  productId: number;
  quantity: number;
  min?: number;
  max?: number;
}

export const QuantityUpdater = ({
  cartId,
  productId,
  quantity,
  min = 1,
  max = 99,
}: IQuantityIpdaterProps) => {
  const updateCartItem = useUpdateCartItem();
  const { mutate: mutateServer, isPending } = useUpdateCart();

  const handleChange = (newQuantity: number) => {
    if (newQuantity < min || newQuantity > max) return;

    mutateServer(
      {
        id: cartId,
        products: [{ id: productId, quantity: newQuantity }],
      },
      {
        onSuccess: (data) => {
          updateCartItem(cartId, productId, data);
        },
      },
    );
  };

  const handleDirectInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      handleChange(Math.min(Math.max(value, min), max));
    }
  };

  return (
    <Controls>
      {isPending && <Loader size="small" />}
      <Button
        onClick={() => handleChange(quantity - 1)}
        disabled={quantity <= min || isPending}
        aria-label="Decrease quantity"
      >
        −
      </Button>
      <Input
        type="number"
        value={quantity}
        onChange={handleDirectInput}
        min={min}
        max={max}
        aria-label="Quantity"
        disabled={isPending}
      />
      <Button
        onClick={() => handleChange(quantity + 1)}
        disabled={quantity >= max || isPending}
        aria-label="Increase quantity"
      >
        +
      </Button>
    </Controls>
  );
};
