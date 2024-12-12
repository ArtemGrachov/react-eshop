import type { IProduct } from '@/types/models/product.interface';
import type { IPagination } from '@/types/api/common/pagination.interface';

export interface IProductsListQuery {
  _page?: number;
  _per_page?: number;
}

export interface IProductsListResponse extends IPagination {
  data: IProduct[];
}
