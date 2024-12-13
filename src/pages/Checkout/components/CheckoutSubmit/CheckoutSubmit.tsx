import { ComponentType } from 'react';

import { useIsProcessing } from '@/hooks/common/use-is-processing';

import { useCheckoutContext } from '@/providers/checkout';
import { useCheckoutStatus } from '@/providers/checkout/hooks/use-checkout-status';

import styles from './styles.module.scss';

const CheckoutSubmit: ComponentType = () => {
  const { submitOrder } = useCheckoutContext();
  const checkoutStatus = useCheckoutStatus();
  const isProcessing = useIsProcessing(checkoutStatus);

  const submitHandler = async () => {
    try {
      await submitOrder();
      alert('Your order has been submitted successfully!');
    } catch {
      alert('Checkout error');
    }
  }

  return (
    <div>
      <h3>
        Checkout submit
      </h3>
      <button
        type="button"
        className={styles.submit}
        onClick={submitHandler}
      >
        {isProcessing ? 'Processing...' : 'Submit order'}
      </button>
    </div>
  )
}

export default CheckoutSubmit;
