import { ComponentType } from 'react';

import { EModalKeys } from '@/constants/modals/modal-keys';

import { useModalContext } from '@/providers/modals';
import { useCartItemsCount } from '@/providers/cart/hooks/use-cart-items-count';

import styles from './styles.module.scss';

const CartButton: ComponentType = () => {
  const { openModal } = useModalContext();
  const count = useCartItemsCount();

  const clickHandler = () => {
    openModal(EModalKeys.CART);
  }

  const counterEl = count > 0 ? (
    <span className={styles.counter}>{count}</span>
  ) : null;

  return (
    <button
      type="button"
      className={styles.host}
      onClick={clickHandler}
    >
      Cart
      {counterEl}
    </button>
  )
}

export default CartButton;
