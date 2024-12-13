import { ComponentType } from 'react'

import styles from './styles.module.scss';

interface IProps {
  first?: number | null
  prev?: number | null
  next?: number | null
  last?: number | null
  current?: number | null
  onNavigate?: (page: number) => any
}

const Pagination: ComponentType<IProps> = ({ first, prev, next, last, current, onNavigate }) => {
  const navigateHandler = (page: number) => {
    onNavigate && onNavigate(page);
  }

  if (first === current) {
    first = null;
  }

  if (first === prev) {
    prev = null;
  }

  if (last === current) {
    last = null;
  }

  if (last === next) {
    next = null;
  }

  return (
    <div className={styles.host}>
      <ul className={styles.list}>
        {first != null && <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigateHandler(first)}
          >
            {first}
          </button>
        </li>}
        {prev != null && <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigateHandler(prev)}
          >
            {prev}
          </button>
        </li>}
        <li>
          <span className={styles.current}>
            {current}
          </span>
        </li>
        {next != null && <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigateHandler(next)}
          >
            {next}
          </button>
        </li>}
        {last != null && <li className={styles.item}>
          <button
            type="button"
            className={styles.button}
            onClick={() => navigateHandler(last)}
          >
            {last}
          </button>
        </li>}
      </ul>
    </div>
  )
}

export default Pagination;
