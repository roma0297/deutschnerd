import React, {useEffect, useState} from 'react';
import styles from './AllVocabularyTopics.module.scss'
import VocabularyTopic from '../VocabularyTopic/VocabularyTopic';
import {firestore} from "../../../../init-firebase";

const AllVocabularyTopics = (props) => {
    let [topics, setTopics] = useState({})

    useEffect(() => {
        firestore.collection("vocabulary").get().then(data => {
            console.log(data)
            setTopics(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
    }, [props.token])

    return (
        <div className={styles.VocabularyTopicsContainer}>
            {
                Object.keys(topics).map((id) => <VocabularyTopic key={id} id={id} {...topics[id]} />)
            }
        </div>
    )
};

export default AllVocabularyTopics;