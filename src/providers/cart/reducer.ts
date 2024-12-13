import { EStatus } from '@/constants/common/status';

import { defaultState } from './state';
import { type Actions, EActions, type ICartState } from './types';

export const reducer = (state = defaultState(), action: Actions): ICartState => {
  switch(action.type) {
    case EActions.ADD_ITEM: {
      return {
        ...state,
        items: [...state.items, action.product],
      };
    }
    case EActions.REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter(product => product.id !== action.productId),
      };
    }
    case EActions.INIT: {
      return {
        ...state,
        initStatus: EStatus.SUCCESS,
        items: action.items,
      }
    }
    default: {
      return state;
    }
  }
}
