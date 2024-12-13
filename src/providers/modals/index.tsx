import { ComponentType, createContext, PropsWithChildren, useContext } from 'react';

import { useModalsService } from './service';
import type { IModalContext } from './types';
import { defaultState } from './state';

export const ModalContext = createContext<IModalContext>({
  state: defaultState(),
  openModal() {},
  closeModal() {},
});

export const useModalContext = () => useContext(ModalContext);

export const ModalProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const service = useModalsService();

  return (
    <ModalContext.Provider value={service}>
      {children}
    </ModalContext.Provider>
  )
}
