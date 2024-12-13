import { ComponentType } from 'react';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';

import type { IProduct } from '@/types/models/product.interface';

interface IProps {
  product: IProduct;
}

const ProductCard: ComponentType<IProps> = ({ product }) => {
  const name = useProductName(product);
  const price = useProductPriceFormatted(product);
  const imageUrl = useProductImageUrl(product);

  return (
    <article>
      <picture>
        <img src={imageUrl} alt={name} />
      </picture>
      <h3>
        {name}
      </h3>
      <p>
        {price}
      </p>
    </article>
  )
}

export default ProductCard;
