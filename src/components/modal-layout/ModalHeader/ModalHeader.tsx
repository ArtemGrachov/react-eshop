import { ComponentType, PropsWithChildren } from 'react'

import styles from './styles.module.scss';

interface IProps {
  onClose?: () => any;
}

const ModalHeader: ComponentType<PropsWithChildren & IProps> = ({ children, onClose }) => {
  return (
    <div className={styles.host}>
      {children}
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  )
}

export default ModalHeader;
