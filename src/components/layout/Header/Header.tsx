import { ComponentType } from 'react';

import styles from './styles.module.scss';

const Header: ComponentType = () => {
  return (
    <header className={styles.host}>
      <div className={styles.container}>
        <h1 className={styles.title}>React e-Shop</h1>
      </div>
    </header>
  )
}

export default Header;
