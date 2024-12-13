import type { IFormProducts } from '@/types/forms/form-products.interface';

export const formValueToRouteQuery = (formValue: IFormProducts) => {
  return { ...formValue } as Record<string, string | number>;
}
