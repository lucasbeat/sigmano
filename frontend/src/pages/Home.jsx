import { useEffect, useState } from "react";

import styles from './Home.module.css';

import { fetchData } from "../services/APIUtils";

import { Form } from "../components/Form/Form";
import { Result } from '../components/Result/Result';
import { Header } from "../components/Header/Header";

export const Home = () => {
  const [dna, setDna] = useState(null);
  const [response, setResponse] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
  
    const dna = value ? JSON.parse(value) : "";
  
    setDna(dna);
  };


  useEffect(() => {
    if (dna) {
      fetchData(dna).then((response) => setResponse(response));
    }
  }, [dna]);

  return (
    <div className={styles.home}>
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Result result={response.result} message={response.message} />
    </div>
  );
};
