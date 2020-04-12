import React from 'react';
import styles from './VocabularyTopics.module.scss'
import VocabularyTopic from "./VocabularyTopic/VocabularyTopic";

const vocabularyTopicsJSON = [
    {
        id: "food",
        name: "Food"
    },
    {
        id: "travelling",
        name: "Travelling"
    },
    {
        id: "idioms",
        name: "Idioms"
    },
    {
        id: "sport",
        name: "Sport"
    },
    {
        id: "hobbies",
        name: "Hobbies"
    },
    {
        id: "education",
        name: "Education"
    },
    {
        id: "shopping",
        name: "Shopping"
    },
    {
        id: "work",
        name: "Work"
    },
    {
        id: "public-transport",
        name: "Public transport"
    },
    {
        id: "art",
        name: "Art"
    },
    {
        id: "home",
        name: "Home"
    },
    {
        id: "animals",
        name: "Animals"
    }
];

const vocabularyTopics = () => (
    <div className={styles.VocabularyTopicsContainer}>
        {
            vocabularyTopicsJSON.map((val) => <VocabularyTopic key={val.id} {...val} />)
        }
    </div>
);

export default vocabularyTopics;