import { ComponentType } from 'react';

import styles from './styles.module.scss';

const CartSummary: ComponentType = () => {
  return (
    <div className={styles.host}>
      <strong>
        Total:
      </strong>
      <span>
        $1000
      </span>
    </div>
  )
}

export default CartSummary;
