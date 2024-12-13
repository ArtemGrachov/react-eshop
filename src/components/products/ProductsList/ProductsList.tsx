import { ComponentType } from 'react';

import ProductCard from '@/components/products/ProductCard/ProductCard';

import type { IProduct } from '@/types/models/product.interface';

import styles from './styles.module.scss';

interface IProps {
  products?: IProduct[];
}

const ProductsList: ComponentType<IProps> = ({ products }) => {
  products = products ?? [];

  return (
    <div>
      <ul className={styles.list}>
        {products.map(product => (
          <li key={product.id} className={styles.item}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsList;
