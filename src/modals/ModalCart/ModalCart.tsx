import { ComponentType } from 'react';

import { useCartItems } from '@/providers/cart/hooks/use-cart-items';

import CartList from './components/CartList/CartList';
import CartSummary from './components/CartSummary/CartSummary';

import styles from './styles.module.scss';

const ModalCart: ComponentType = () => {
  const items = useCartItems();
  return (
    <div className={styles.modal}>
      <CartList items={items} />
      <CartSummary />
    </div>
  )
}

export default ModalCart;
