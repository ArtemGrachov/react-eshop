import { ComponentType } from 'react';

import CartButton from '@/components/cart/CartButton/CartButton';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Header: ComponentType = () => {
  return (
    <header className={styles.host}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link to="/" className={styles.homeLink}>
            React e-Shop
          </Link>
        </h1>
        <CartButton />
      </div>
    </header>
  )
}

export default Header;
