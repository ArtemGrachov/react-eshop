import { ComponentType } from 'react';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';

import type { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  product: IProduct;
}

const ProductCard: ComponentType<IProps> = ({ product }) => {
  const name = useProductName(product);
  const price = useProductPriceFormatted(product);
  const imageUrl = useProductImageUrl(product);

  return (
    <article>
      <picture className={styles.imageWrap}>
        <img src={imageUrl} alt={name}  className={styles.image} />
      </picture>
      <h3>
        {name}
      </h3>
      <p className={styles.price}>
        {price}
      </p>
    </article>
  )
}

export default ProductCard;
