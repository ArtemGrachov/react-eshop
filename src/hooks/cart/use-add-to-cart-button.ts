import { useAddToCart } from '@/providers/cart/hooks/use-add-to-cart';

import { useProductName } from '@/hooks/product/use-product-name';

import type { IProduct } from '@/types/models/product.interface';

interface IOptions {
  product: IProduct
}

export const useAddToCartButton = ({ product }: IOptions) => {
  const addToCart = useAddToCart();
  const name = useProductName(product);

  const addToCartHandler = async () => {
    await addToCart(product);
    alert(`Product ${name} has been successfully added to your cart!`);
  }

  return {
    addToCartHandler,
  };
}
