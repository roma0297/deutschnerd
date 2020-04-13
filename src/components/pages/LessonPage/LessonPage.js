import React from 'react';
import LessonHeader from './LessonHeader/LessonHeader';
import LessonFooter from './LessonFooter/LessonFooter';
import styles from './LessonPage.module.scss'

const LessonPage = (props) => {

    const someDummyContent = [...Array(200).keys()].map(() => <div>Some dummy content<br/></div>);

    const sections = (props.children || []).map((section, index) => <section key={index}>{someDummyContent}</section>);

    return (
        <div>
            <LessonHeader lessonTitle="Lesson name"/>
            <main className={styles.LessonContainer}>
                <section>{someDummyContent}</section>
                <section>{someDummyContent}</section>
            </main>
            <LessonFooter lessonNumber="2" totalAmountOfLessons="7"/>
        </div>
    );
};

export default LessonPage;

