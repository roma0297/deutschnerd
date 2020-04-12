import React from 'react';
import styles from './BooksPage.module.scss';
import SearchBox from "./SearchBox/SearchBox";
import Books from "./Books/Books";

const booksPage = () => (
    <div className={styles.BooksContainer}>
        <aside className={styles.BooksContainer__left}>
            <ul>
                <li>Все книги</li>
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

export default booksPage;