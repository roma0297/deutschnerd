import React from 'react'
import styles from "./Jumbotron.module.scss";
import Link from "react-router-dom/Link";

const jumbotron = () => (
    <section className={styles.jumbotron}>
        <div>
            <h1 className={styles.jumbotron__title}>Покори немецкий с deutschnerd!</h1>
            <p className={styles.jumbotron__description}>Deutschnerd — это эффективный сервис для нескучного
                изучения немецкого языка. Более 20 000 000
                человек во всем мире выбрали Deutschnerd.
                Присоединяйся!
            </p>
            <Link className={styles.jumbotron__button} to="/login">Начать учиться!</Link>
        </div>
    </section>
);

export default jumbotron;