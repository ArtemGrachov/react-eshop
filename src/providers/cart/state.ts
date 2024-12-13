import { EStatus } from '@/constants/common/status';

import { ICartState } from './types';

export const defaultState = (): ICartState => {
  return {
    initStatus: EStatus.INIT,
    items: [],
  };
}
