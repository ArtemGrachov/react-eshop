import { useState } from 'react';

import { EStatus } from '@/constants/common/status';

import { useCartContext } from '..'

export const useRemoveFromCart = () => {
  const [status, setStatus] = useState(EStatus.INIT);
  const { removeItem } = useCartContext();

  return {
    removeItemStatus: status,
    removeItem: async (productId: number) => {
      try {
        setStatus(EStatus.PROCESSING);
        await removeItem(productId);
        setStatus(EStatus.SUCCESS);
      } catch (err) {
        setStatus(EStatus.ERROR);
        throw err;
      }
    }
  }
}
