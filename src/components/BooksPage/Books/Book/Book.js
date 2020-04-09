import React from 'react';
import styles from './Book.module.scss'
import {withRouter} from "react-router";

const book = (props) => {
    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div className={styles.Book} onClick={() => handleClick(`/books/${props.id}`)}>
            <div className={styles.Book__inner}>
                <h3>{props.name || ""}</h3>
            </div>
        </div>
    )
};

export default withRouter(book);