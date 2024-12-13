import { ComponentType } from 'react';

import { IProduct } from '@/types/models/product.interface';

import CheckoutItem from '../CheckoutItem/CheckoutItem';

import styles from './styles.module.scss';

interface IProps {
  items?: IProduct[];
}

const CheckoutList: ComponentType<IProps> = ({ items }) => {
  items = items ?? [];

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <CheckoutItem item={item} />
        </li>
      ))}
    </ul>
  )
}

export default CheckoutList;
