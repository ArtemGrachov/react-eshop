import { ComponentType } from 'react'

import { CheckoutProvider } from '@/providers/checkout';

import CheckoutSubmit from './components/CheckoutSubmit/CheckoutSubmit';
import CheckoutSummary from './components/CheckoutSummary/CheckoutSummary';

import styles from './styles.module.scss';

const PageCheckout: ComponentType = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h2>
          Checkout
        </h2>
        <CheckoutSummary />
        <CheckoutSubmit />
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
