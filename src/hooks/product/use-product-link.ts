import { useMemo } from 'react';

import type { IProduct } from '@/types/models/product.interface';

export const useProductLink = (product?: IProduct | null) => useMemo(() => `/product/${product?.id}`, [product]);
