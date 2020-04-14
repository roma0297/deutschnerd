import React, {useEffect, useState} from 'react';
import styles from './Books.module.scss'
import Book from './Book/Book';
import {connect} from 'react-redux';
import axios from 'axios'

const Books = (props) => {
    let [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`https://dn-app-c1adb.firebaseio.com/books.json?auth=${props.token}`)
            .then(res => setBooks(res.data))
            .catch(err => console.log(err));
    }, [props.token])

    console.log(books);

    return (
        <div className={styles.BooksContainer}>
            {
                Object.keys(books).map((id) => <Book key={id} id={id} {...books[id]} />)
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Books);