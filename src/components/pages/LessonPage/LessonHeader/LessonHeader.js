import React from 'react';
import styles from './LessonHeader.module.scss'

const LessonHeader = (props) => (
    <header className={styles.LessonHeader}>
        <div><h4>Logo</h4></div>
        <div className={styles.LessonHeader__title}>
            <h4>
                {props.lessonTitle}
            </h4>
        </div>
        <div className={styles.LessonHeader__account}>Account</div>
    </header>
);

export default LessonHeader;