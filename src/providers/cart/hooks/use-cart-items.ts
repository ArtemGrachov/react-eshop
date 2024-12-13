import { useMemo } from 'react';

import { useCartContext } from '..'

export const useCartItems = () => {
  const { state } = useCartContext();

  return useMemo(() => state.items ?? [], [state]);
}
