import React from 'react';
import styles from './Articles.module.scss'
import Article from "./Article/Article";

const booksJSON = [
    {
        id: "article1",
        name: "Article 1"
    },
    {
        id: "article2",
        name: "Article 2"
    },
    {
        id: "article3",
        name: "Article 3"
    }
];

const articles = () => (
    <div className={styles.ArticlesContainer}>
        {
            booksJSON.map((val) => <Article key={val.id} {...val} />)
        }
    </div>
);

export default articles;