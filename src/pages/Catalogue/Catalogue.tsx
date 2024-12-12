import { ComponentType, useEffect } from 'react';

import { ProductListProvider, useProductListContext } from '@/providers/product-list';
import { useProducts } from '@/providers/product-list/hooks/use-products';

const PageCatalogue: ComponentType = () => {
  const { getProducts } = useProductListContext();
  const products = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Catalogue page</h2>
      {JSON.stringify(products)}
    </div>
  )
}

const Wrapper = () => {
  return (
    <ProductListProvider>
      <PageCatalogue />
    </ProductListProvider>
  )
}

export default Wrapper;
