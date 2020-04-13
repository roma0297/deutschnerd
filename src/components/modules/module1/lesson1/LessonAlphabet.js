import React from 'react';
import LessonLayout from "../../../hoc/LessonLayout/LessonLayout";

const lessonConfig = {
    lessonTitle:"Alphabet",
    lessonNumber:"2",
    totalAmountOfLessons:"7",
    previousLesson:"/",
    nextLesson:"/",
};


const LessonAlphabet = () => (
    <LessonLayout {...lessonConfig}>
        <div>Some grammar shit</div>
        <div>Some exercises</div>
    </LessonLayout>
);

export default LessonAlphabet;