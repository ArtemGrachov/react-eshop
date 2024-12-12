import { useReducer } from 'react';

import { PRODUCT_LIST_DEFAULT_QUERY } from '@/constants/products/product-list-query';

import { useHttpClientContext } from '@/providers/http-client';

import type { IProductsListQuery } from '@/types/api/products/products-list.interface';

import { reducer } from './reducer';
import { defaultState } from './state';
import { EActions, type IProductListContext } from './types';

export const useProductListService = (): IProductListContext => {
  const [state, dispatch] = useReducer(reducer, defaultState());
  const httpClient = useHttpClientContext();

  const getProducts = async (query: IProductsListQuery = {}) => {
    try {
      query = { ...PRODUCT_LIST_DEFAULT_QUERY, ...query };

      dispatch({ type: EActions.GET });

      const { data } = await httpClient.get(`${import.meta.env.VITE_API_URL}/products`, { params: query });

      dispatch({ type: EActions.GET_SUCCESS, data });
    } catch (err) {
      dispatch({ type: EActions.GET_ERROR });
      throw err;
    }
  }

  return {
    state,
    getProducts,
  };
}
