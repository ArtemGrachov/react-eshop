import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { useCartItem } from '@/hooks/cart/use-cart-item';

import RemoveFromCart from '@/components/cart/RemoveFromCart/RemoveFromCart';

import { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  item: IProduct
}

const CheckoutItem: ComponentType<IProps> = ({ item }) => {
  const { name, price, imageUrl, link } = useCartItem(item);

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
      <RemoveFromCart product={item} />
    </div>
  )
}

export default CheckoutItem;
