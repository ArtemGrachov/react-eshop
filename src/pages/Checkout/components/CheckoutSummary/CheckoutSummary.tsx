import { ComponentType } from 'react';

import styles from './styles.module.scss';

const CheckoutSummary: ComponentType = () => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td>Products count</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>$100</td>
        </tr>
      </tbody>
    </table>
  )
}

export default CheckoutSummary;
