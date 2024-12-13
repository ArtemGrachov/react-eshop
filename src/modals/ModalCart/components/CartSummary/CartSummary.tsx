import { ComponentType } from 'react';

import { useCartSummary } from '@/hooks/cart/use-cart-summary';

import styles from './styles.module.scss';

const CartSummary: ComponentType = () => {
  const { totalPriceFormatted } = useCartSummary();

  return (
    <div className={styles.host}>
      <strong>
        Total:
      </strong>
      <span>
        {totalPriceFormatted}
      </span>
    </div>
  )
}

export default CartSummary;
