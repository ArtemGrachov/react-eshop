import { ComponentType, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';

import { ProductProvider, useProductContext } from '@/providers/product';

import ProductDetails from './components/ProductDetails/ProductDetails'

import styles from './styles.module.scss';

const PageProduct: ComponentType = () => {
  const params = useParams();
  const id = useMemo(() => +params.id!, [params]);
  const { getProduct } = useProductContext();

  useEffect(() => {
    if (id == null) {
      return;
    }

    getProduct(id);
  }, [id]);

  return (
    <main className={styles.page}>
      <ProductDetails />
    </main>
  )
}

const Wrapper: ComponentType = () => {
  return (
    <ProductProvider>
      <PageProduct />
    </ProductProvider>
  )
}

export default Wrapper;
