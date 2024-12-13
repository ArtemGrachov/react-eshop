import { useMemo } from 'react';
import { useCartItems } from './use-cart-items'

export const useCartTotalPrice = () => {
  const items = useCartItems();

  return useMemo(() => items.reduce((acc, curr) => acc + curr.price, 0), [items]);
}
