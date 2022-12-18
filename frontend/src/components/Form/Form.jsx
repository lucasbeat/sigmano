import { Details } from '../Details/Details';

import styles from './Form.module.css';

export const Form = ({ handleSubmit }) => {
  return (
    <div className={styles.form}>
      <Details />
      <form  onSubmit={handleSubmit}>
        <input className={styles.input} type="text" name="dna" placeholder="Dna"></input>
        <button className={styles.button} type="submit">Send</button>
      </form>
    </div>
  );
};
