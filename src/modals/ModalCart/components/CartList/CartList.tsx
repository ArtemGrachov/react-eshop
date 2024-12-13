import { ComponentType } from 'react';

import { IProduct } from '@/types/models/product.interface';

import CartItem from '../CartItem/CartItem';

import styles from './styles.module.scss';

interface IProps {
  items?: IProduct[];
}

const CartList: ComponentType<IProps> = ({ items }) => {
  items = items ?? [];

  return (
    <ul className={styles.list}>
      {items.map((item, index) => (
        <li key={item.id + '_' + index} className={styles.item}>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CartList;
