import { EStatus } from '@/constants/common/status';

import { defaultState } from './state';
import { type Actions, EActions, type ICheckoutState } from './types';

export const reducer = (state = defaultState(), action: Actions): ICheckoutState => {
  switch(action.type) {
    case EActions.SUBMIT: {
      return {
        ...state,
        submitStatus: EStatus.PROCESSING,
      };
    }
    case EActions.SUBMIT_SUCCESS: {
      return {
        ...state,
        submitStatus: EStatus.SUCCESS,
      };
    }
    case EActions.SUBMIT_ERROR: {
      return {
        ...state,
        submitStatus: EStatus.ERROR,
      }
    }
    default: {
      return state;
    }
  }
}
