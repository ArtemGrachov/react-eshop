import { EStatus } from '@/constants/common/status';

import type { IReducerAction } from '@/types/reducer/action.interface';
import type { IProduct } from '@/types/models/product.interface';

export interface ICartState {
  items: IProduct[];
  initStatus: EStatus
}

export interface ICartContext {
  state: ICartState;
  addItem: (product: IProduct) => Promise<void>
  removeItem: (productId: number) => Promise<void>
}

export const enum EActions {
  INIT = 'INIT',
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

export interface IActionInit extends IReducerAction<EActions.INIT> {
  items: IProduct[];
}

export interface IActionAddItem extends IReducerAction<EActions.ADD_ITEM> {
  product: IProduct;
}

export interface IActionRemoveItem extends IReducerAction<EActions.REMOVE_ITEM> {
  productId: number;
}

export type Actions = IActionInit
  | IActionAddItem
  | IActionRemoveItem;
