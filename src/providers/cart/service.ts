import { useEffect, useReducer } from 'react';

import { CART_STORAGE_KEY } from '@/constants/cart/cart-storage-key';
import { EStatus } from '@/constants/common/status';

import type { IProduct } from '@/types/models/product.interface';

import { timeoutPromise } from '@/utils/timeout-promise';

import { reducer } from './reducer';
import { defaultState } from './state';
import { EActions, type ICartContext } from './types';

export const useCartService = (): ICartContext => {
  const [state, dispatch] = useReducer(reducer, defaultState());

  const addItem = async (product: IProduct) => {
    await timeoutPromise(1000);
    dispatch({ type: EActions.ADD_ITEM, product });
  }

  const removeItem = async (productId: number) => {
    await timeoutPromise(1000);
    dispatch({ type: EActions.REMOVE_ITEM, productId });
  }

  const clear = () => {
    dispatch({ type: EActions.CLEAR });
  }

  useEffect(() => {
    if (state.initStatus === EStatus.INIT) {
      try {
        const items = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) ?? '') || [];
        dispatch({ type: EActions.INIT, items });
      } catch {
        dispatch({ type: EActions.INIT, items: [] });
      }
    } else {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    }
  }, [state.items]);

  return {
    state,
    addItem,
    removeItem,
    clear,
  };
}
