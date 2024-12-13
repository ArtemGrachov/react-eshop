import { useReducer } from 'react';

import { reducer } from './reducer';
import { defaultState } from './state';
import { EActions, type IModalContext } from './types';

export const useModalsService = (): IModalContext => {
  const [state, dispatch] = useReducer(reducer, defaultState());

  const openModal = (key: string) => {
    dispatch({ type: EActions.OPEN_MODAL, key });
  }

  const closeModal = (key: string) => {
    dispatch({ type: EActions.CLOSE_MODAL, key });
  }

  return {
    openModal,
    closeModal,
    state,
  };
}
