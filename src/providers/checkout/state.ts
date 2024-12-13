import { EStatus } from '@/constants/common/status';

import { ICheckoutState } from './types';

export const defaultState = (): ICheckoutState => {
  return {
    submitStatus: EStatus.INIT,
  };
}
