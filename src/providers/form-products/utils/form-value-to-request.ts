import type { IFormProducts } from '@/types/forms/form-products.interface';
import type { IProductsListQuery } from '@/types/api/products/products-list.interface';

export const formValueToRequest = (formValue: IFormProducts): IProductsListQuery => {
  return {
    _page: formValue.page,
    _sort: formValue.sort,
  };
}