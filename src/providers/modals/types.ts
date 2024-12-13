import type { EModalKeys } from '@/constants/modals/modal-keys';

import type { IReducerAction } from '@/types/reducer/action.interface';

export interface IModalsState {
  values: Record<EModalKeys, any>
}

export interface IModalContext {
  state: IModalsState,
  openModal: (key: string) => void,
  closeModal: (key: string) => void,
}

export const enum EActions {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}

export interface IActionOpenModal extends IReducerAction<EActions.OPEN_MODAL> {
  key: string;
}

export interface IActionCloseModal extends IReducerAction<EActions.CLOSE_MODAL> {
  key: string;
}

export type Actions = IActionOpenModal
  | IActionCloseModal;
