import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useCartService } from './service';
import type { ICartContext } from './types';
import { defaultState } from './state';

export const CartContext = createContext<ICartContext>({
  state: defaultState(),
  async addItem() {},
  async removeItem() {},
  clear() {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useCartService();

  return (
    <CartContext.Provider value={service}>
      {children}
    </CartContext.Provider>
  )
}
