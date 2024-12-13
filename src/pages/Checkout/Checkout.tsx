import { ComponentType } from 'react'

import { CheckoutProvider } from '@/providers/checkout';
import { useCartItems } from '@/providers/cart/hooks/use-cart-items';

import CheckoutSubmit from './components/CheckoutSubmit/CheckoutSubmit';
import CheckoutSummary from './components/CheckoutSummary/CheckoutSummary';
import CheckoutList from './components/CheckoutList/CheckoutList';

import styles from './styles.module.scss';

const PageCheckout: ComponentType = () => {
  const items = useCartItems();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h2>
          Checkout
        </h2>
        <div className={styles.row}>
          <CheckoutList items={items} />
        </div>
        <div className={styles.row}>
          <CheckoutSummary />
        </div>
        <div className={styles.row}>
          <CheckoutSubmit />
        </div>
      </div>
    </main>
  )
}

const Wrapper: ComponentType = () => {
  return (
    <CheckoutProvider>
      <PageCheckout />
    </CheckoutProvider>
  )
}

export default Wrapper;
