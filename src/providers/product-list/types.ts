import { EStatus } from '@/constants/common/status';

import type {
  IProductsListQuery,
  IProductsListResponse,
} from '@/types/api/products/products-list.interface';
import type { IReducerAction } from '@/types/reducer/action.interface';

export interface IProductListState {
  data: IProductsListResponse | null;
  getStatus: EStatus
}

export interface IProductListContext {
  state: IProductListState;
  getProducts: (query?: IProductsListQuery) => Promise<void>
}

export const enum EActions {
  GET = 'GET',
  GET_SUCCESS = 'GET_SUCCESS',
  GET_ERROR = 'GET_ERROR',
}

export interface IActionGet extends IReducerAction<EActions.GET> {}

export interface IActionGetSuccess extends IReducerAction<EActions.GET_SUCCESS> {
  data: IProductsListResponse;
}

export interface IActionGetError extends IReducerAction<EActions.GET_ERROR> {}

export type Actions = IActionGet
  | IActionGetSuccess
  | IActionGetError;
