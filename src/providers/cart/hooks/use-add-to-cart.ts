import { useCartContext } from '..'

import { IProduct } from '@/types/models/product.interface';

export const useAddToCart = () => {
  const { addItem } = useCartContext();

  return async (product: IProduct) => addItem(product);
}
