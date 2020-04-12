import React from 'react';
import styles from './ArticlesPage.module.scss';
import SearchBox from "./SearchBox/SearchBox";
import Books from "./Articles/Articles";

const articlesPage = () => (
    <div className={styles.ArticlesContainer}>
        <aside className={styles.ArticlesContainer__left}>
            <ul>
                <li>Все статьи</li>
                <li>Рекомендуемые</li>
                <li>Моя библиотека</li>
            </ul>
        </aside>
        <main>
            <SearchBox/>
            <Books/>
        </main>
    </div>
);

export default articlesPage;