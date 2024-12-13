import { ComponentType, useEffect } from 'react';

import { ProductListProvider, useProductListContext } from '@/providers/product-list';
import { useProducts } from '@/providers/product-list/hooks/use-products';

import ProductsList from '@/components/products/ProductsList/ProductsList';

import styles from './styles.module.scss';

const PageCatalogue: ComponentType = () => {
  const { getProducts } = useProductListContext();
  const products = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

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
      <PageCatalogue />
    </ProductListProvider>
  )
}

export default Wrapper;
