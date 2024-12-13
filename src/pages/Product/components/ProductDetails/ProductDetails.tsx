import { ComponentType } from 'react';
import clsx from 'clsx';

import { useProduct } from '@/providers/product/hooks/use-product';

import AddToCart from '@/components/cart/AddToCart/AddToCart';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';
import { useProductDescription } from '@/hooks/product/use-product-description';

import styles from './styles.module.scss';

const ProductDetails: ComponentType = () => {
  const product = useProduct();

  const name = useProductName(product);
  const price = useProductPriceFormatted(product);
  const imageUrl = useProductImageUrl(product);
  const description = useProductDescription(product);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={clsx(styles.col, styles._sm)}>
            <picture className={styles.imageWrap}>
              <img src={imageUrl} alt={name}  className={styles.image} />
            </picture>
          </div>
          <div className={clsx(styles.col, styles._lg)}>
            <h2>
              {name}
            </h2>
            <p className={styles.price}>
              {price}
            </p>
            <p>
              {description}
            </p>
            {product && <AddToCart product={product} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;
