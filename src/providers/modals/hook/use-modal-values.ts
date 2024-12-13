import { useMemo } from 'react';
import { useModalContext } from '..';

export const useModalValues = () => {
  const { state } = useModalContext();

  return useMemo(() => state.values, [state]);
}
