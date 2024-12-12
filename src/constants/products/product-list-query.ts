import { PRODUCTS_PER_PAGE } from '@/constants/products/products-pagination';

import type { IProductsListQuery } from '@/types/api/products/products-list.interface';

export const PRODUCT_LIST_DEFAULT_QUERY: IProductsListQuery = {
  _page: 1,
  _per_page: PRODUCTS_PER_PAGE
}
