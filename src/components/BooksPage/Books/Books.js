import React from 'react';
import styles from './Books.module.scss'
import Book from "./Book/Book";

const booksJSON = [
    {
        id: "book1",
        name: "Book 1"
    },
    {
        id: "book2",
        name: "Book 2"
    },
    {
        id: "book3",
        name: "Book 3"
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