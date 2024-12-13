import { useMemo } from 'react';
import { useProductContext } from '..'

export const useProduct = () => {
  const { state } = useProductContext();

  return useMemo(() => state.data, [state]);
}
