import { ComponentType, useMemo } from 'react';

import { useFormProductsContext } from '@/providers/form-products';
import { useProductListContext } from '@/providers/product-list';

import Pagination from '@/components/other/Pagination/Pagination';

import { IProductsListResponse } from '@/types/api/products/products-list.interface';

const CataloguePagination: ComponentType = () => {
  const { state } = useProductListContext();

  const { form, update } = useFormProductsContext();
  const { watch } = form;

  const currentPage = watch('page');

  const { first, last, next, prev } = useMemo(() => {
    return state.data ?? {} as Partial<IProductsListResponse>;
  }, [state]);

  const navigationHandler = (page: number) => {
    form.setValue('page', page);
    update();
  }

  return (
    <Pagination
      first={first}
      last={last}
      next={next}
      prev={prev}
      current={currentPage}
      onNavigate={navigationHandler}
    />
  )
}

export default CataloguePagination;
