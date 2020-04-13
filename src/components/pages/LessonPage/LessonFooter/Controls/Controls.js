import React from 'react';
import styles from './Controls.module.scss'
import Link from 'react-router-dom/Link';

const Controls = (props) => (
    <div className={styles.Controls}>
        <Link className={styles.Controls__button}>Prev</Link>
        <p>{`${props.lessonNumber} / ${props.totalAmountOfLessons}`}</p>
        <Link className={styles.Controls__button}>Next</Link>
    </div>
);

export default Controls;