import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useCheckoutService } from './service';
import type { ICheckoutContext } from './types';
import { defaultState } from './state';

export const CheckoutContext = createContext<ICheckoutContext>({
  state: defaultState(),
  async submitOrder() {},
});

export const useCheckoutContext = () => useContext(CheckoutContext);

export const CheckoutProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useCheckoutService();

  return (
    <CheckoutContext.Provider value={service}>
      {children}
    </CheckoutContext.Provider>
  )
}
