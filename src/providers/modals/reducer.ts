import { defaultState } from './state';
import { type Actions, EActions, type IModalsState } from './types';

export const reducer = (state = defaultState(), action: Actions): IModalsState => {
  switch(action.type) {
    case EActions.OPEN_MODAL: {
      return {
        ...state,
        values: {
          ...state.values,
          [action.key]: true,
        },
      };
    }
    case EActions.CLOSE_MODAL: {
      return {
        ...state,
        values: {
          ...state.values,
          [action.key]: false,
        },
      };
    }
    default: {
      return state;
    }
  }
}
