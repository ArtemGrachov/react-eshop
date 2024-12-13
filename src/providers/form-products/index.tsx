'use client';
import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useFormProductsService } from './service';
import { IFormProductsContext } from './types';

export const FormProductsContext = createContext<IFormProductsContext>({} as IFormProductsContext);

export const useFormProductsContext = () => useContext(FormProductsContext);

export const FormProductsProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useFormProductsService();

  return (
    <FormProductsContext.Provider value={service}>
      {children}
    </FormProductsContext.Provider>
  )
}
