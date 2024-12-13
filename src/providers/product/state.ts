import { EStatus } from '@/constants/common/status';

import { IProductState } from './types';

export const defaultState = (): IProductState => {
  return {
    data: null,
    getStatus: EStatus.INIT,
  };
}
