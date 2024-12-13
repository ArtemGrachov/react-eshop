import { ComponentType } from 'react'

import ProductDetails from './components/ProductDetails/ProductDetails'

import styles from './styles.module.scss';

const PageProduct: ComponentType = () => {
  return (
    <main className={styles.page}>
      <ProductDetails />
    </main>
  )
}

export default PageProduct;
