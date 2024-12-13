import { ComponentType } from 'react';

import { useAddToCart } from '@/providers/cart/hooks/use-add-to-cart';

import { useProductName } from '@/hooks/product/use-product-name';

import type { IProduct } from '@/types/models/product.interface';

interface IProps {
  product: IProduct
}

const AddToCart: ComponentType<IProps> = ({ product }) => {
  const addToCart = useAddToCart();
  const name = useProductName(product);

  const addToCartHandler = async () => {
    await addToCart(product);
    alert(`Product ${name} has been successfully added to your cart!`);
  }

  return (
    <button type="button" onClick={addToCartHandler}>
      Add to cart
    </button>
  )
}

export default AddToCart;
