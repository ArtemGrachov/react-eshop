import { useMemo } from 'react';
import { useCheckoutContext } from '..'

export const useCheckoutStatus = () => {
  const { state } = useCheckoutContext();
  
  return useMemo(() => state.submitStatus, [state]);
}
