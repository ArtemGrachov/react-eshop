import { useMemo } from 'react';
import { useProductListContext } from '..'

export const useProducts = () => {
  const { state } = useProductListContext();
console.log(state);

  return useMemo(() => state.data?.data ?? [], [state]);
}
