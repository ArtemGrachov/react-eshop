import { ComponentType, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FormProductsProvider, useFormProductsContext } from '@/providers/form-products';
import { ProductListProvider, useProductListContext } from '@/providers/product-list';
import { useProducts } from '@/providers/product-list/hooks/use-products';
import { routeQueryToFormValue } from '@/providers/form-products/utils/route-query-to-form-value';

import ProductsList from '@/components/products/ProductsList/ProductsList';

import styles from './styles.module.scss';
import { useIsProcessing } from '../../hooks/common/use-is-processing';
import { formValueToRequest } from '../../providers/form-products/utils/form-value-to-request';

const PageCatalogue: ComponentType = () => {
  const { getProducts, state } = useProductListContext();
  const products = useProducts();
  const isProcessing = useIsProcessing(state.getStatus);

  const [searchQuery, setSearchQuery] = useSearchParams();
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
        <ProductsList
          products={products}
        />
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
