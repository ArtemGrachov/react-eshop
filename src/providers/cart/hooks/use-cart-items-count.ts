import { useMemo } from 'react';
import { useCartItems } from './use-cart-items'

export const useCartItemsCount = () => {
  const items = useCartItems();

  return useMemo(() => items.length, [items]);
}
