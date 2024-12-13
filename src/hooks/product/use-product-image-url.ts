import { useMemo } from 'react';

import type { IProduct } from '@/types/models/product.interface';

export const useProductImageUrl = (product: IProduct) => useMemo(() => product.imageUrl, [product]);
