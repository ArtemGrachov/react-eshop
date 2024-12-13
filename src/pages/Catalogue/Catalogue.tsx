import { ComponentType, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useIsProcessing } from '@/hooks/common/use-is-processing';

import { FormProductsProvider, useFormProductsContext } from '@/providers/form-products';
import { ProductListProvider, useProductListContext } from '@/providers/product-list';
import { useProducts } from '@/providers/product-list/hooks/use-products';
import { routeQueryToFormValue } from '@/providers/form-products/utils/route-query-to-form-value';
import { formValueToRequest } from '@/providers/form-products/utils/form-value-to-request';

import ProductsList from '@/components/products/ProductsList/ProductsList';
import CataloguePagination from './components/CataloguePagination/CataloguePagination';
import CatalogueSorting from './components/CatalogueSorting/CatalogueSorting';

import styles from './styles.module.scss';

const PageCatalogue: ComponentType = () => {
  const { getProducts, state } = useProductListContext();
  const products = useProducts();
  const isProcessing = useIsProcessing(state.getStatus);

  const [searchQuery] = useSearchParams();
  const { form } = useFormProductsContext();

  useEffect(() => {
    if (isProcessing) {
      return;
    }

    const query = Object.fromEntries(searchQuery.entries());

    const formValue = routeQueryToFormValue(query);
    form.reset(formValue);

    const requestQuery = formValueToRequest(formValue);

    getProducts(requestQuery);
  }, [searchQuery]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h2>
          Catalogue
        </h2>
        <CatalogueSorting />
        <ProductsList
          products={products}
        />
        <CataloguePagination />
      </div>
    </div>
  )
}

const Wrapper = () => {
  return (
    <ProductListProvider>
      <FormProductsProvider>
        <PageCatalogue />
      </FormProductsProvider>
    </ProductListProvider>
  )
}

export default Wrapper;
