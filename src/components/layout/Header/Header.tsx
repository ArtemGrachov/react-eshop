import { ComponentType } from 'react';

import CartButton from '@/components/cart/CartButton/CartButton';

import styles from './styles.module.scss';

const Header: ComponentType = () => {
  return (
    <header className={styles.host}>
      <div className={styles.container}>
        <h1 className={styles.title}>React e-Shop</h1>
        <CartButton />
      </div>
    </header>
  )
}

export default Header;
