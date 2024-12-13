import { useMemo } from 'react';

import type { IProduct } from '@/types/models/product.interface';

export const useProductPrice = (product: IProduct) => useMemo(() => product.price, [product]);
