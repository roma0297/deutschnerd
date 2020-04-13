import React from 'react'
import styles from './LevelsPage.module.scss'
import Level from "./Level/Level";
import Layout from "../../hoc/Layout/Layout";

const levelsJSON = [
    {
        title: "Начальный уровень",
        description: "Если вы только начинаете учить немецкий - вам сюда.",
        modules: [
            {
                name: "Алфавит, дифтонги, правила чтения",
                link: "/",
                description: "",
            },
            {
                name: "Род существительного, определенный артикль",
                link: "/",
                description: "",
            },
            {
                name: "Количественные числительные",
                link: "/",
                description: "",
            },
            {
                name: "Личное местоимение, глаголы haben и sein",
                link: "/",
                description: "",
            },
            {
                name: "Неопределенный артикль",
                link: "/",
                description: "",
            },
            {
                name: "Прилагательные и степени сравнения прилагательных",
                link: "/",
                description: "",
            },
            {
                name: "Слабые и сильные глаголы",
                link: "/",
                description: "",
            },
            {
                name: "Простое повествовательное предложение",
                link: "/",
                description: "",
            },
            {
                name: "Отделяемые и неотделяемые приставки",
                link: "/",
                description: "",
            },
            {
                name: "Вопросительные предложения",
                link: "/",
                description: "",
            },
            {
                name: "Отрицание",
                link: "/",
                description: "",
            },
            {
                name: "Возвратные глаголы",
                link: "/",
                description: "",
            },
            {
                name: "Местоимение man и безличное местоимение es",
                link: "/",
                description: "",
            },
            {
                name: "Повелительное наклонение",
                link: "/",
                description: "",
            },
            {
                name: "Модальные глаголы",
                link: "/",
                description: "",
            },
        ]
    },
    {
        title: "Средний уровень",
        description: "Уже знакомы с основами? Хотите строить сложные предложения? Это ваш уровень!",
        modules: [
            {
                name: "Будущее время. Futurum 1",
                link: "/",
                description: "",
            },
            {
                name: "Präteritum",
                link: "/",
                description: "",
            },
            {
                name: "Perfekt",
                link: "/",
                description: "",
            },
            {
                name: "Употребление определенных и неопределенных артиклей",
                link: "/",
                description: "",
            },
            {
                name: "Склонение определенного артикля",
                link: "/",
                description: "",
            },
            {
                name: "Предлоги, требующие Dat и Akk",
                link: "/",
                description: "",
            },
            {
                name: "Парные глаголы",
                link: "/",
                description: "",
            },
            {
                name: "Предлоги, требующие Gen",
                link: "/",
                description: "",
            },
            {
                name: "Постановка вопроса к дополнению после глаголов с устойчивым предлогом",
                link: "/",
                description: "",
            },
            {
                name: "Склонение существительных",
                link: "/",
                description: "",
            },
            {
                name: "Порядковые числительные",
                link: "/",
                description: "",
            },
            {
                name: "Infinitiv с zu и без zu",
                link: "/",
                description: "",
            },
            {
                name: "Сложносочиненное предложение с союзами und, aber, denn, sondern, oder",
                link: "/",
                description: "",
            },
            {
                name: "Сложносочиненные союзы nicht nur...sonder auch, weder...noch",
                link: "/",
                description: "",
            },
            {
                name: "Сложносочиненное предложение c союзами daher, darum, deshalb, deswegen",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподичененное предложение (Objektsatz)",
                link: "/",
                description: "",
            },
            {
                name: "Местоименные наречия",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподчиненное предложение (ob)",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподчиненное предложение (warum, wann)",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподчиненное предложение (Temporalsatz)",
                link: "/",
                description: "",
            },
            {
                name: "Реальные условные предложения с wenn",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподчиненное предложение (Условные предложения)",
                link: "/",
                description: "",
            },
            {
                name: "Сложноподчиненное предложение (Kausalsätze: da, weil)",
                link: "/",
                description: "",
            },
            {
                name: "Finalsatz vs Inifinitivkonstruktionen (um zu, ohne zu, statt zu)",
                link: "/",
                description: "",
            },
            {
                name: "Attributsatz или Relativsatz",
                link: "/",
                description: ""
            }
        ]
    },
    {
        title: "Продвинутый уровень",
        description: "Уже хорошо говорите? Пора делать речь еще красивее!",
        modules: [
            {
                name: "Verben mit Reaktion",
                link: "/",
                description: "",
            },
            {
                name: "Склонение прилагательных",
                link: "/",
                description: "",
            },
            {
                name: "Субстантивированные прилогательные",
                link: "/",
                description: "",
            },
            {
                name: "Склонение порядковых числительных",
                link: "/",
                description: "",
            },
            {
                name: "Partizipien",
                link: "/",
                description: "",
            },
            {
                name: "Plusquamperfekt",
                link: "/",
                description: "",
            },
            {
                name: "Tmporalsatz (nachdem)",
                link: "/",
                description: "",
            },
            {
                name: "Futur 2",
                link: "/",
                description: "",
            },
            {
                name: "Passiv (Vorgangspassiv, Zustandspassiv)",
                link: "/",
                description: "",
            },
            {
                name: "Partizipiale Konstruktionen (Partizipialsätze)",
                link: "/",
                description: "",
            },
            {
                name: "Passiversatzformen",
                link: "/",
                description: "",
            },
            {
                name: "Modalverben in subjektiver Bedeutung",
                link: "/",
                description: "",
            },
            {
                name: "Modalverbänliche Verben",
                link: "/",
                description: "",
            },
            {
                name: "Konjunktiv 1",
                link: "/",
                description: "",
            },
            {
                name: "Konjunktiv 2",
                link: "/",
                description: "",
            },
            {
                name: "Wunschsätze",
                link: "/",
                description: "",
            },
            {
                name: "Vergleichsätze",
                link: "/",
                description: "",
            },
        ]
    }
];

const levelsPage = () => (
    <Layout>
        <main className={styles.LevelsContainer}>
            <Level {...levelsJSON[0]}/>
            <Level {...levelsJSON[1]}/>
            <Level {...levelsJSON[2]}/>
        </main>
    </Layout>
);

export default levelsPage;