import React from 'react'
import styles from './Levels.module.css'
import Level from "./Level/Level";

const levelsJSON = [
    {
        title: "Начальный уровень",
        description: "Если вы только начинаете учить немецкий - вам сюда.",
        lessons: [
            {name: "Урок 1"},
            {name: "Урок 2"},
            {name: "Урок 3"},
            {name: "Урок 4"},
            {name: "Урок 5"},
            {name: "Урок 6"},
            {name: "Урок 7"},
        ]
    },
    {
        title: "Средний уровень",
        description: "Уже знакомы с основами? Хотите строить сложные предложения? Это ваш уровень!",
        lessons: [
            {name: "Урок 1"},
            {name: "Урок 2"},
            {name: "Урок 3"},
            {name: "Урок 4"},
            {name: "Урок 5"},
            {name: "Урок 6"},
            {name: "Урок 7"},
        ]
    },
    {
        title: "Продвинутый уровень",
        description: "Уже хорошо говорите? Пора делать речь еще красивее!",
        lessons: [
            {name: "Урок 1"},
            {name: "Урок 2"},
            {name: "Урок 3"},
            {name: "Урок 4"},
            {name: "Урок 5"},
            {name: "Урок 6"},
            {name: "Урок 7"},
        ]
    }
];

const levelsPage = () => (
    <main className={styles.someClass}>
        <Level {...levelsJSON[0]}/>
        <Level {...levelsJSON[1]}/>
        <Level {...levelsJSON[2]}/>
    </main>
);

export default levelsPage;