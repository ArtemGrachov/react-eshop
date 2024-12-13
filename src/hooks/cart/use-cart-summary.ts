import { useCartItemsCount } from '@/providers/cart/hooks/use-cart-items-count'
import { useCartTotalPrice } from '@/providers/cart/hooks/use-cart-total-price';
import { useFormatPrice } from '../common/use-format-price';

export const useCartSummary = () => {
  const itemsCount = useCartItemsCount();
  const totalPrice = useCartTotalPrice();
  const totalPriceFormatted = useFormatPrice(totalPrice);

  return {
    itemsCount,
    totalPrice,
    totalPriceFormatted,
  };
}
