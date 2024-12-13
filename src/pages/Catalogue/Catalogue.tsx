import { ComponentType, useEffect } from 'react';

import { ProductListProvider, useProductListContext } from '@/providers/product-list';
import { useProducts } from '@/providers/product-list/hooks/use-products';

import ProductsList from '@/components/products/ProductsList/ProductsList';

const PageCatalogue: ComponentType = () => {
  const { getProducts } = useProductListContext();
  const products = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <ProductsList
        products={products}
      />
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
