import React from 'react'
import styles from './LevelsPage.module.scss'
import Level from "./Level/Level";

const levelsJSON = [
    {
        title: "Начальный уровень",
        description: "Если вы только начинаете учить немецкий - вам сюда.",
        modules: [
            {name: "Алфавит, дифтонги, правила чтения"},
            {name: "Род существительного, определенный артикль"},
            {name: "Количественные числительные"},
            {name: "Личное местоимение, глаголы haben и sein"},
            {name: "Неопределенный артикль"},
            {name: "Прилагательные и степени сравнения прилагательных"},
            {name: "Слабые и сильные глаголы"},
            {name: "Простое повествовательное предложение"},
            {name: "Отделяемые и неотделяемые приставки"},
            {name: "Вопросительные предложения"},
            {name: "Отрицание"},
            {name: "Возвратные глаголы"},
            {name: "Местоимение man и безличное местоимение es"},
            {name: "Повелительное наклонение"},
            {name: "Модальные глаголы"},
        ]
    },
    {
        title: "Средний уровень",
        description: "Уже знакомы с основами? Хотите строить сложные предложения? Это ваш уровень!",
        modules: [
            {name: "Будущее время. Futurum 1"},
            {name: "Präteritum"},
            {name: "Perfekt"},
            {name: "Употребление определенных и неопределенных артиклей"},
            {name: "Склонение определенного артикля"},
            {name: "Предлоги, требующие Dat и Akk"},
            {name: "Парные глаголы"},
            {name: "Предлоги, требующие Gen"},
            {name: "Постановка вопроса к дополнению после глаголов с устойчивым предлогом"},
            {name: "Склонение существительных"},
            {name: "Порядковые числительные"},
            {name: "Infinitiv с zu и без zu"},
            {name: "Сложносочиненное предложение с союзами und, aber, denn, sondern, oder"},
            {name: "Сложносочиненные союзы nicht nur...sonder auch, weder...noch"},
            {name: "Сложносочиненное предложение c союзами daher, darum, deshalb, deswegen"},
            {name: "Сложноподичененное предложение (Objektsatz)"},
            {name: "Местоименные наречия"},
            {name: "Сложноподчиненное предложение (ob)"},
            {name: "Сложноподчиненное предложение (warum, wann)"},
            {name: "Сложноподчиненное предложение (Temporalsatz)"},
            {name: "Реальные условные предложения с wenn"},
            {name: "Сложноподчиненное предложение (Условные предложения)"},
            {name: "Сложноподчиненное предложение (Kausalsätze: da, weil)"},
            {name: "Finalsatz vs Inifinitivkonstruktionen (um zu, ohne zu, statt zu)"},
            {name: "Attributsatz или Relativsatz"}
        ]
    },
    {
        title: "Продвинутый уровень",
        description: "Уже хорошо говорите? Пора делать речь еще красивее!",
        modules: [
            {name: "Verben mit Reaktion"},
            {name: "Склонение прилагательных"},
            {name: "Субстантивированные прилогательные"},
            {name: "Склонение порядковых числительных"},
            {name: "Partizipien"},
            {name: "Plusquamperfekt"},
            {name: "Tmporalsatz (nachdem)"},
            {name: "Futur 2"},
            {name: "Passiv (Vorgangspassiv, Zustandspassiv)"},
            {name: "Partizipiale Konstruktionen (Partizipialsätze)"},
            {name: "Passiversatzformen"},
            {name: "Modalverben in subjektiver Bedeutung"},
            {name: "Modalverbänliche Verben"},
            {name: "Konjunktiv 1"},
            {name: "Konjunktiv 2"},
            {name: "Wunschsätze"},
            {name: "Vergleichsätze"},
        ]
    }
];

const levelsPage = () => (
    <main className={styles.LevelsContainer}>
        <Level {...levelsJSON[0]}/>
        <Level {...levelsJSON[1]}/>
        <Level {...levelsJSON[2]}/>
    </main>
);

export default levelsPage;