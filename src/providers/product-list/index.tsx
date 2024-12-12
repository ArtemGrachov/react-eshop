import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useProductListService } from './service';
import type { IProductListContext } from './types';
import { defaultState } from './state';

export const ProductListContext = createContext<IProductListContext>({
  state: defaultState(),
  async getProducts() {},
});

export const useProductListContext = () => useContext(ProductListContext);

export const ProductListProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useProductListService();

  return (
    <ProductListContext.Provider value={service}>
      {children}
    </ProductListContext.Provider>
  )
}
