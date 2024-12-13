import { ComponentType, PropsWithChildren } from 'react'

import styles from './styles.module.scss';

const ModalWrapper: ComponentType<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.host}>
      {children}
    </div>
  )
}

export default ModalWrapper;
