import { ComponentType, PropsWithChildren } from 'react'

import styles from './styles.module.scss';

const ModalWindow: ComponentType<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.host}>
      {children}
    </div>
  )
}

export default ModalWindow;
