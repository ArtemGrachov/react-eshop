import { ComponentType, useMemo } from 'react';

import { useFormProductsContext } from '@/providers/form-products';
import { useProductListContext } from '@/providers/product-list';

import Pagination from '@/components/other/Pagination/Pagination';

import { IProductsListResponse } from '@/types/api/products/products-list.interface';

const CataloguePagination: ComponentType = () => {
  const { state } = useProductListContext();

  const { form } = useFormProductsContext();
  const { watch } = form;

  const currentPage = watch('page');

  const { first, last, next, prev } = useMemo(() => {
    return state.data ?? {} as Partial<IProductsListResponse>;
  }, [state]);

  return (
    <Pagination
      first={first}
      last={last}
      next={next}
      prev={prev}
      current={currentPage}
    />
  )
}

export default CataloguePagination;
