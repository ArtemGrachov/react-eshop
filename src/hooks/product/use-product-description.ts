import { useMemo } from 'react';

import type { IProduct } from '@/types/models/product.interface';

export const useProductDescription = (product?: IProduct | null) => useMemo(() => product?.description, [product]);
