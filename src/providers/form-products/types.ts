import { UseFormReturn } from 'react-hook-form';

import { IFormProducts } from '@/types/forms/form-products.interface';

export interface IFormProductsContext {
  form: UseFormReturn<IFormProducts, any, undefined>
  update: (resetPage?: boolean) => void
}
