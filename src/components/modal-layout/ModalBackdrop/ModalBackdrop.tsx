import { ComponentType, PropsWithChildren } from 'react'

import styles from './styles.module.scss';

interface IProps {
  onClose?: () => any;
}

const ModalBackdrop: ComponentType<PropsWithChildren & IProps> = ({ children, onClose }) => {
  return (
    <div className={styles.host} onClick={onClose}>
      {children}
    </div>
  )
}

export default ModalBackdrop;
