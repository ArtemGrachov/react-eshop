import { EStatus } from '@/constants/common/status';

import type { IProductResponse } from '@/types/api/products/product.interface';
import type { IReducerAction } from '@/types/reducer/action.interface';

export interface IProductState {
  data: IProductResponse | null;
  getStatus: EStatus
}

export interface IProductContext {
  state: IProductState;
  getProduct: (productId: number) => Promise<void>
}

export const enum EActions {
  GET = 'GET',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',
}

export interface IActionGet extends IReducerAction<EActions.GET> {}

export interface IActionGetSuccess extends IReducerAction<EActions.GET_SUCCESS> {
  data: IProductResponse;
}

export interface IActionGetError extends IReducerAction<EActions.GET_ERROR> {}

export type Actions = IActionGet
  | IActionGetSuccess
  | IActionGetError;
