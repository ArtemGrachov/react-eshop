import { ComponentType } from 'react';

import { useCartItems } from '@/providers/cart/hooks/use-cart-items';
import { useModalContext } from '@/providers/modals';

import ModalWrapper from '@/components/modal-layout/ModalWrapper/ModalWrapper';
import ModalWindow from '@/components/modal-layout/ModalWindow/ModalWindow';
import ModalHeader from '@/components/modal-layout/ModalHeader/ModalHeader';
import ModalBackdrop from '@/components/modal-layout/ModalBackdrop/ModalBackdrop';
import CartList from './components/CartList/CartList';
import CartSummary from './components/CartSummary/CartSummary';

import styles from './styles.module.scss';
import { EModalKeys } from '../../constants/modals/modal-keys';

const ModalCart: ComponentType = () => {
  const items = useCartItems();
  const { closeModal } = useModalContext();

  const closeHandler = () => {
    closeModal(EModalKeys.CART);
  }

  return (
    <ModalWrapper>
      <ModalBackdrop onClose={closeHandler} />
      <ModalWindow>
        <ModalHeader onClose={closeHandler}>
          Cart
        </ModalHeader>
        <div className={styles.content}>
          <CartList items={items} />
          <CartSummary />
        </div>
      </ModalWindow>
    </ModalWrapper>
  )
}

export default ModalCart;
