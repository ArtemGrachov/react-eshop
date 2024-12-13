import { ComponentType } from 'react';
import clsx from 'clsx';

import { useRemoveFromCartButton } from '@/hooks/cart/use-remove-from-cart-button';

import type { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  product: IProduct
  className?: string
}

const RemoveFromCart: ComponentType<IProps> = ({ product, className }) => {
  const { removeFromCartHandler, isProcessing } = useRemoveFromCartButton({ product })

  return (
    <button
      type="button"
      className={clsx(className, styles.host)}
      onClick={removeFromCartHandler}
    >
      {isProcessing ? '...' : 'Remove'}
    </button>
  )
}

export default RemoveFromCart;
