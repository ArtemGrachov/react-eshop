import { ComponentType, lazy } from 'react';

import { useModalValues } from '@/providers/modals/hook/use-modal-values';
import { EModalKeys } from '@/constants/modals/modal-keys';

const ModalCart = lazy(() => import('@/modals/ModalCart/ModalCart'));

const ModalRoot: ComponentType = () => {
  const values = useModalValues();

  return (
    <>
      {values[EModalKeys.CART] && <ModalCart />}
    </>
  )
}

export default ModalRoot;
