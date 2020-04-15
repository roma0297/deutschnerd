import React from 'react';
import styles from './VocabularyTopic.module.scss'
import {withRouter} from "react-router";

const vocabularyTopic = (props) => {
    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div className={styles.VocabularyTopic} onClick={() => handleClick(`/vocabulary/topics/${props.id}`)}>
            <div className={styles.VocabularyTopic__inner}>
                <h3>{props.title || ""}</h3>
            </div>
        </div>
    )
};

export default withRouter(vocabularyTopic);