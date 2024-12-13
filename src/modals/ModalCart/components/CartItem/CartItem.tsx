import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { useProductName } from '@/hooks/product/use-product-name';
import { useProductPriceFormatted } from '@/hooks/product/use-product-price-formatted';
import { useProductLink } from '@/hooks/product/use-product-link';

import RemoveFromCart from '@/components/cart/RemoveFromCart/RemoveFromCart';

import { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  item: IProduct
}

const CartItem: ComponentType<IProps> = ({ item }) => {
  const name = useProductName(item);
  const price = useProductPriceFormatted(item);
  const link = useProductLink(item);

  return (
    <div className={styles.host}>
      <div className={styles.row}>
        <Link to={link} className={styles.name}>
          {name}
        </Link>
        <p className={styles.price}>
          {price}
        </p>
      </div>
      <RemoveFromCart product={item} />
    </div>
  )
}

export default CartItem;
