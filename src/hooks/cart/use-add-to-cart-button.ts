import { useAddToCart } from '@/providers/cart/hooks/use-add-to-cart';

import { useProductName } from '@/hooks/product/use-product-name';

import type { IProduct } from '@/types/models/product.interface';
import { useIsProcessing } from '../common/use-is-processing';

interface IOptions {
  product: IProduct
}

export const useAddToCartButton = ({ product }: IOptions) => {
  const { addToCart, addToCartStatus } = useAddToCart();
  const name = useProductName(product);
  const isProcessing = useIsProcessing(addToCartStatus);

  const addToCartHandler = async () => {
    if (isProcessing) {
      return;
    }

    await addToCart(product);
    alert(`Product ${name} has been successfully added to your cart!`);
  }

  return {
    addToCartHandler,
    isProcessing,
  };
}
