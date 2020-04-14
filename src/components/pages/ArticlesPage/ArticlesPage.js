import React from 'react';
import styles from './ArticlesPage.module.scss';
import SearchBox from "./SearchBox/SearchBox";
import Articles from "./Articles/Articles";
import Layout from '../../hoc/Layout/Layout';

const articlesPage = () => (
    <Layout>
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
                <Articles/>
            </main>
        </div>
    </Layout>
);

export default articlesPage;