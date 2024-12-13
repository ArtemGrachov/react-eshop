import { useRemoveFromCart } from '@/providers/cart/hooks/use-remove-from-cart';

import { useIsProcessing } from '@/hooks/common/use-is-processing';

import type { IProduct } from '@/types/models/product.interface';

interface IOptions {
  product: IProduct
}

export const useRemoveFromCartButton = ({ product }: IOptions) => {
  const { removeItem, removeItemStatus } = useRemoveFromCart();
  const isProcessing = useIsProcessing(removeItemStatus);

  const removeFromCartHandler = async () => {
    if (isProcessing) {
      return;
    }

    await removeItem(product.id);
  }

  return {
    removeFromCartHandler,
    isProcessing,
  };
}
