import { useMemo } from 'react';
import { useProductListContext } from '..'

export const useProducts = () => {
  const { state } = useProductListContext();

  return useMemo(() => state.data?.data ?? [], [state]);
}
