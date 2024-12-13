import type { IFormProducts } from '@/types/forms/form-products.interface';

export const routeQueryToFormValue = (params: Record<string, string>) => {
  const result: Partial<IFormProducts> = {};

  if (params.page) {
    const numPage = +params.page;

    if (!isNaN(numPage)) {
      result.page = numPage;
    } else {
      result.page = 1;
    }
  } else {
    result.page = 1;
  }

  if (params.sort) {
    result.sort = params.sort as 'price' | '-price';
  } else {
    result.sort = '-price';
  }

  return result as IFormProducts;
}
