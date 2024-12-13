import { EStatus } from '@/constants/common/status';

import type { IReducerAction } from '@/types/reducer/action.interface';

export interface ICheckoutState {
  submitStatus: EStatus;
}

export interface ICheckoutContext {
  state: ICheckoutState;
  submitOrder: () => Promise<void>;
}

export const enum EActions {
  SUBMIT = 'SUBMIT',
  SUBMIT_SUCCESS = 'SUBMIT_SUCCESS',
  SUBMIT_ERROR = 'SUBMIT_ERROR'
}

export interface IActionSubmit extends IReducerAction<EActions.SUBMIT> {}

export interface IActionSubmitSuccess extends IReducerAction<EActions.SUBMIT_SUCCESS> {}

export interface IActionSubmitError extends IReducerAction<EActions.SUBMIT_ERROR> {}

export type Actions = IActionSubmit
  | IActionSubmitSuccess
  | IActionSubmitError;
