import { useReducer } from 'react';

import { useHttpClientContext } from '@/providers/http-client';

import { reducer } from './reducer';
import { defaultState } from './state';
import { EActions, type IProductContext } from './types';

export const useProductService = (): IProductContext => {
  const [state, dispatch] = useReducer(reducer, defaultState());
  const httpClient = useHttpClientContext();

  const getProduct = async (productId: number) => {
    try {
      dispatch({ type: EActions.GET });

      const { data } = await httpClient.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);

      dispatch({ type: EActions.GET_SUCCESS, data });
    } catch (err) {
      dispatch({ type: EActions.GET_ERROR });
      throw err;
    }
  }

  return {
    state,
    getProduct,
  };
}
