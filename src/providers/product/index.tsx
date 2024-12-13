import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useProductService } from './service';
import type { IProductContext } from './types';
import { defaultState } from './state';

export const ProductContext = createContext<IProductContext>({
  state: defaultState(),
  async getProduct() {},
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useProductService();

  return (
    <ProductContext.Provider value={service}>
      {children}
    </ProductContext.Provider>
  )
}
