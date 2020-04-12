import React from 'react'
import styles from './Level.module.scss'
import Lesson from "./Lesson/Lesson";

const level = (props) => {
    const lessonsList = props.lessons.map((lesson, index) => <Lesson key={index} {...lesson} />);

    return (
        <section className={styles.Level}>
            <aside className={styles.Level__left}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </aside>
            <main className={styles.Level__right}>
                {lessonsList}
            </main>
        </section>
    );
};

export default level