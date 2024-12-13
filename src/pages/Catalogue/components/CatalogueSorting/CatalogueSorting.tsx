import { ComponentType } from 'react';

import { useFormProductsContext } from '@/providers/form-products';

import styles from './styles.module.scss';

const CatalogueSorting: ComponentType = () => {
  const { form, update } = useFormProductsContext();

  const fieldSort = form.register('sort', {
    onChange(v) {
      update(true);
    }
  });

  return (
    <div className={styles.host}>
      <select id="sort" {...fieldSort}>
        <option value="-price">Price (DESC)</option>
        <option value="price">Price (ASC)</option>
      </select>
    </div>
  )
}

export default CatalogueSorting;
