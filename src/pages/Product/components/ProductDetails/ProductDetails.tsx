import { ComponentType } from 'react';

import styles from './styles.module.scss';
import clsx from 'clsx';

const ProductDetails: ComponentType = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={clsx(styles.col, styles._sm)}>
            <picture className={styles.imageWrap}>
              <img src="" alt=""  className={styles.image} />
            </picture>
          </div>
          <div className={clsx(styles.col, styles._lg)}>
            <h2>
              product
            </h2>
            <p>
              price
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails;
