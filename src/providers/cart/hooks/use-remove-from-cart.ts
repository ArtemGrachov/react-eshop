import { useCartContext } from '..'

export const useRemoveFromCart = () => {
  const { removeItem } = useCartContext();

  return async (productId: number) => {
    await removeItem(productId);
  };
}
