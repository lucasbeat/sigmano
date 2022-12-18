import styles from './Details.module.css';

export const Details = () => {
  return (
    <div className={styles.details}>
        <p className={styles.exemple}>Insert the DNA sequence below, example: ["CTGA", "CTGA", "TATT", "AGAG"]</p>
    </div>
  )
}