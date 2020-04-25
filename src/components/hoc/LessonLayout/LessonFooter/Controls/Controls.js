import React from 'react';
import styles from './Controls.module.scss'
import {Link} from "react-router-dom";

const Controls = (props) => (
    <div className={styles.Controls}>
        <Link to={props.previousLesson} className={styles.Controls__button}>Prev</Link>
        <p>{`${props.lessonNumber} / ${props.totalAmountOfLessons}`}</p>
        <Link to={props.nextLesson} className={styles.Controls__button}>Next</Link>
    </div>
);

export default Controls;