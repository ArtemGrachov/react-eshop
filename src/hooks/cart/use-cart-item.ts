import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';
import { useProductLink } from '@/hooks/product/use-product-link';

import type { IProduct } from '@/types/models/product.interface';

export const useCartItem = (item: IProduct) => {
  const name = useProductName(item);
  const price = useProductPriceFormatted(item);
  const imageUrl = useProductImageUrl(item);
  const link = useProductLink(item);

  return {
    name,
    price,
    imageUrl,
    link,
  };
}
