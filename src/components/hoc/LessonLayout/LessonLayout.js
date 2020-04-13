import React from 'react';
import LessonHeader from './LessonHeader/LessonHeader';
import LessonFooter from './LessonFooter/LessonFooter';
import styles from './LessonLayout.module.scss'

const LessonLayout = (props) => {

    const sections = (props.children || []).map((section, index) => <section key={index}>{section}</section>);

    return (
        <div className={styles.LessonLayout}>
            <LessonHeader lessonTitle={props.lessonTitle}/>

            <main className={styles.LessonContainer}>
                {sections}
            </main>

            <LessonFooter
                lessonNumber={props.lessonNumber}
                totalAmountOfLessons={props.totalAmountOfLessons}
                previousLesson={props.previousLesson}
                nextLesson={props.nextLesson}
            />
        </div>
    );
};

export default LessonLayout;

