import { PRODUCTS_FORM_DEFAULT_VALUE } from '@/constants/products/products-form';

import type { IFormProducts } from '@/types/forms/form-products.interface';

export const formValueToRouteQuery = (formValue: IFormProducts) => {
  const result = {
    page: formValue.page.toString(),
    sort: formValue.sort.toString(),
  } as Record<string, string>;

  Object.keys(result).forEach(key => {
    const value = result[key];
    const defaultValue = PRODUCTS_FORM_DEFAULT_VALUE[key as keyof IFormProducts];

    if (value == null || defaultValue == null) {
      return;
    }

    if (value === defaultValue + '') {
      delete result[key];
    }
  });

  return result;
}
