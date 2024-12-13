import { useMemo } from 'react'

export const useFormatPrice = (price: number) => {
  return useMemo(() => `$${(price / 100).toFixed()}`, [price]);
}
