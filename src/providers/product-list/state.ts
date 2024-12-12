import { EStatus } from '@/constants/common/status';

import { IProductListState } from './types';

export const defaultState = (): IProductListState => {
  return {
    data: null,
    getStatus: EStatus.INIT,
  };
}
