import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductImageUrl } from '@/hooks/product/use-product-image-url';
import { useProductLink } from '@/hooks/product/use-product-link';

import { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  item: IProduct
}

const CheckoutItem: ComponentType<IProps> = ({ item }) => {
  const name = useProductName(item);
  const price = useProductPriceFormatted(item);
  const imageUrl = useProductImageUrl(item);
  const link = useProductLink(item);

  return (
    <div className={styles.host}>
      <picture className={styles.imageWrap}>
        <img src={imageUrl} alt={name}  className={styles.image} />
      </picture>
      <Link to={link} className={styles.name}>
        {name}
      </Link>
      <p className={styles.price}>
        {price}
      </p>
    </div>
  )
}

export default CheckoutItem;
