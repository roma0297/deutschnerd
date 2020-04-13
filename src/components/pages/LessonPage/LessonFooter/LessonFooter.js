import React from 'react';
import styles from './LessonFooter.module.scss'
import Controls from "./Controls/Controls";
import Help from "./Help/Help";

const LessonFooter = (props) => (
    <footer className={styles.LessonFooter}>
        <div>Menu</div>
        <Controls
            lessonNumber={props.lessonNumber}
            totalAmountOfLessons={props.totalAmountOfLessons}
        />
        <Help/>
    </footer>);

export default LessonFooter;