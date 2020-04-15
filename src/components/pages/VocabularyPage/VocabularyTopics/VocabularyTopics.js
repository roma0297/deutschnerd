import React, {useEffect, useState} from 'react';
import styles from './VocabularyTopics.module.scss'
import VocabularyTopic from './VocabularyTopic/VocabularyTopic';
import {connect} from 'react-redux';
import axios from "axios";
import Book from "../../BooksPage/Books/Book/Book";

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

const VocabularyTopics = (props) => {
    let [topics, setTopics] = useState({})

    useEffect(() => {
        axios.get(`https://dn-app-c1adb.firebaseio.com/vocabulary/topics.json?auth=${props.token}`)
            .then(res => setTopics(res.data))
            .catch(err => console.log(err));
    }, [props.token])

    return (
        <div className={styles.VocabularyTopicsContainer}>
            {
                Object.keys(topics).map((id) => <VocabularyTopic key={id} id={id} {...topics[id]} />)
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(VocabularyTopics);