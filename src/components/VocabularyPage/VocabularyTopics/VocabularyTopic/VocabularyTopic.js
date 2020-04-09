import React from 'react';
import styles from './VocabularyTopic.module.scss'

const vocabularyTopic = (props) => (
    <div className={styles.VocabularyTopic}>
        <div className={styles.VocabularyTopic__inner}>
            <h3>{props.name || ""}</h3>
        </div>
    </div>
);

export default vocabularyTopic;