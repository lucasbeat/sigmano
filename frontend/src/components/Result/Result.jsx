import styles from './Result.module.css';

export const Result = ({ message, result }) => {
  return (
    <div className={styles.result}>
      <p className={styles.message}>{ message }</p>
      <p className={styles.title}>Result: { result ? result : 'No data' }</p>
    </div>
  )
}