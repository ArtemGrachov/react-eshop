import { ComponentType } from 'react';
import { IProduct } from '../../../types/models/product.interface';
import ProductCard from '../ProductCard/ProductCard';

interface IProps {
  products?: IProduct[];
}

const ProductsList: ComponentType<IProps> = ({ products }) => {
  products = products ?? [];

  return (
    <div>
      <ul>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </ul>
    </div>
  )
}

export default ProductsList;
