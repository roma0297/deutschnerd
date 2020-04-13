import React from 'react'
import styles from './Level.module.scss'
import Module from "./Module/Module";

const level = (props) => {
    const modulesList = props.modules.map((module, index) => <Module key={index} {...module} />);

    return (
        <section className={styles.Level}>
            <aside className={styles.Level__left}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </aside>
            <main className={styles.Level__right}>
                {modulesList}
            </main>
        </section>
    );
};

export default level