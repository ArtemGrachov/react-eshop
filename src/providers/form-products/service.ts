import { useForm } from 'react-hook-form';

import type { IFormProducts } from '@/types/forms/form-products.interface';

export const useFormProductsService = () => {
  const form = useForm<IFormProducts>();

  return {
    form,
  };
}
