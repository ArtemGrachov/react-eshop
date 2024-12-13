import { ComponentType } from 'react';
import clsx from 'clsx';

import { useAddToCartButton } from '@/hooks/cart/use-add-to-cart-button';

import type { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  product: IProduct
  className?: string
}

const AddToCart: ComponentType<IProps> = ({ product, className }) => {
  const { addToCartHandler, isProcessing } = useAddToCartButton({ product })

  return (
    <button
      type="button"
      className={clsx(className, styles.host)}
      onClick={addToCartHandler}
    >
      {isProcessing ? '...' : '+'}
    </button>
  )
}

export default AddToCart;
