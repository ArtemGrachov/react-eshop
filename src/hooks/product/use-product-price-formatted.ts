import { useFormatPrice } from '@/hooks/common/use-format-price';

import type { IProduct } from '@/types/models/product.interface';

import { useProductPrice } from './use-product-price';

export const useProductPriceFormatted = (product: IProduct) => {
  const price = useProductPrice(product);

  return useFormatPrice(price);
};
