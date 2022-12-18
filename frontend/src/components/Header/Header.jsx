import sigma from '../../assets/sigma.png';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={sigma} alt="sigma" />
    </header>
  )
}