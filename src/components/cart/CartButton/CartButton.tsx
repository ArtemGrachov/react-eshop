import { ComponentType } from 'react';

import { EModalKeys } from '@/constants/modals/modal-keys';

import { useModalContext } from '@/providers/modals';

import styles from './styles.module.scss';

const CartButton: ComponentType = () => {
  const { openModal } = useModalContext();

  const clickHandler = () => {
    openModal(EModalKeys.CART);
  }

  return (
    <button
      type="button"
      className={styles.host}
      onClick={clickHandler}
    >
      Cart
    </button>
  )
}

export default CartButton;
