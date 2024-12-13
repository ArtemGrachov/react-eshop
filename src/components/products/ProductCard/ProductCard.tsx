import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';
import { useProductLink } from '@/hooks/product/use-product-link';

import AddToCartIcon from '@/components/cart/AddToCartIcon/AddToCartIcon';

import type { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  product: IProduct;
}

const ProductCard: ComponentType<IProps> = ({ product }) => {
  const name = useProductName(product);
  const price = useProductPriceFormatted(product);
  const imageUrl = useProductImageUrl(product);
  const link = useProductLink(product);

  return (
    <article className={styles.host}>
      <picture className={styles.imageWrap}>
        <img src={imageUrl} alt={name}  className={styles.image} />
      </picture>
      <div className={styles.row}>
        <div className={styles.details}>
          <h3>
            <Link to={link} className={styles.link}>
              {name}
            </Link>
          </h3>
          <p className={styles.price}>
            {price}
          </p>
        </div>
        <AddToCartIcon
          className={styles.addToCart}
          product={product}
        />
      </div>
    </article>
  )
}

export default ProductCard;
