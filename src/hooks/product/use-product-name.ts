import { useMemo } from 'react';

import type { IProduct } from '@/types/models/product.interface';

export const useProductName = (product: IProduct) => useMemo(() => product.name, [product]);
