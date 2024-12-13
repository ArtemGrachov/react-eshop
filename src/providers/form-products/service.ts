import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import type { IFormProducts } from '@/types/forms/form-products.interface';
import { formValueToRouteQuery } from './utils/form-value-to-route-query';

export const useFormProductsService = () => {
  const form = useForm<IFormProducts>();
  const [_, setSearchQuery] = useSearchParams();

  const update = (resetPage?: boolean) => {
    if (resetPage) {
      form.setValue('page', 1);
    }

    const formValue = form.getValues();
    const query = formValueToRouteQuery(formValue);
    setSearchQuery(query);
  }

  return {
    form,
    update,
  };
}
