import { EStatus } from '@/constants/common/status';

import { defaultState } from './state';
import { Actions, EActions } from './types';

export const reducer = (state = defaultState(), action: Actions) => {
  switch(action.type) {
    case EActions.GET: {
      return {
        ...state,
        getStatus: EStatus.PROCESSING,
      };
    }
    case EActions.GET_ERROR: {
      return {
        ...state,
        getStatus: EStatus.ERROR,
      };
    }
    case EActions.GET_SUCCESS: {
      return {
        ...state,
        getStatus: EStatus.SUCCESS,
        data: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
