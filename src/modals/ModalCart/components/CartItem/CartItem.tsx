import { ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { useCartItem } from '@/hooks/cart/use-cart-item';

import RemoveFromCart from '@/components/cart/RemoveFromCart/RemoveFromCart';

import { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  item: IProduct
}

const CartItem: ComponentType<IProps> = ({ item }) => {
  const { name, price, link } = useCartItem(item);

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
