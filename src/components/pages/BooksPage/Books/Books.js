import React from 'react';
import styles from './Books.module.scss'
import Book from "./Book/Book";

const booksJSON = [
    {
        id: "book1",
        name: "Article 1"
    },
    {
        id: "book2",
        name: "Article 2"
    },
    {
        id: "book3",
        name: "Article 3"
    }
];

const books = () => (
    <div className={styles.BooksContainer}>
        {
            booksJSON.map((val) => <Book key={val.id} {...val} />)
        }
    </div>
);

export default books;