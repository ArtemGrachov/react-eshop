import { useReducer } from 'react';

import { useCartContext } from '@/providers/cart';

import { timeoutPromise } from '@/utils/timeout-promise';

import { reducer } from './reducer';
import { defaultState } from './state';
import { EActions, type ICheckoutContext } from './types';
import { useNavigate } from 'react-router-dom';

export const useCheckoutService = (): ICheckoutContext => {
  const [state, dispatch] = useReducer(reducer, defaultState());
  const { clear } = useCartContext();
  const navigate = useNavigate();

  const submitOrder = async () => {
    try {
      dispatch({ type: EActions.SUBMIT });
      await timeoutPromise(1000); 
      clear();
      dispatch({ type: EActions.SUBMIT_SUCCESS });
      navigate('/');
    } catch (err) {
      dispatch({ type: EActions.SUBMIT_ERROR });
      throw err;
    }
  }

  return {
    state,
    submitOrder,
  };
}
