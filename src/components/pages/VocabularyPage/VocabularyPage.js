import React from 'react';
import styles from './VocabularyPage.module.scss';
import SearchBox from "./SearchBox/SearchBox";
import VocabularyTopics from "./VocabularyTopics/VocabularyTopics";

const vocabularyPage = () => (
    <div className={styles.VocabularyContainer}>
        <aside className={styles.VocabularyContainer__left}>
            <ul>
                <li>Все наборы</li>
                <li>Популярные</li>
                <li>Рекомендуемые</li>
                <li>Мой словарь</li>
            </ul>
        </aside>
        <main>
            <SearchBox/>
            <VocabularyTopics/>
        </main>
    </div>
);

export default vocabularyPage;