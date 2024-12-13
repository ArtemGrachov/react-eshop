import { useState } from 'react';
import { useCartContext } from '..'

import { EStatus } from '@/constants/common/status';

import { IProduct } from '@/types/models/product.interface';

export const useAddToCart = () => {
  const [status, setStatus] = useState(EStatus.INIT);
  const { addItem } = useCartContext();

  return {
    addToCartStatus: status,
    addToCart: async (product: IProduct) => {
      try {
        setStatus(EStatus.PROCESSING);
        await addItem(product);
        setStatus(EStatus.SUCCESS);
      } catch (err) {
        setStatus(EStatus.ERROR);
        throw err;
      }
    }
  }
}
