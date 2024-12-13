import { useMemo } from 'react';
import { EStatus } from '@/constants/common/status';

export const useIsProcessing = (status: EStatus) => useMemo(() => status === EStatus.PROCESSING, [status]);
