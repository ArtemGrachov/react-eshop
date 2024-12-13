import { ComponentType } from 'react';

import { useCartSummary } from '@/hooks/cart/use-cart-summary';

import styles from './styles.module.scss';

const CheckoutSummary: ComponentType = () => {
  const { itemsCount, totalPriceFormatted } = useCartSummary();

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Products count</td>
          <td>{itemsCount}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{totalPriceFormatted}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CheckoutSummary;
