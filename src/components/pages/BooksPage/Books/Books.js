import React, {useEffect, useState} from 'react';
import styles from './Books.module.scss'
import Book from './Book/Book';
import {firestore} from '../../../../init-firebase'

const Books = (props) => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        firestore.collection("books").get().then(data => {
            console.log(data)
            setBooks(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
    }, []);

    console.log(books);

    return (
        <div className={styles.BooksContainer}>
            {
                Object.keys(books).map((id) => <Book key={id} {...books[id]} />)
            }
        </div>
    )
};

export default Books;