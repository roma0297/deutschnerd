import React, {useEffect, useState} from 'react';
import styles from './Book.module.scss'
import {withRouter} from "react-router";
import {storage} from "../../../../../init-firebase";
import Tag from "../../../../UI/Tag/Tag";

const Book = (props) => {
    const [coverUrl, setCoverUrl] = useState('');

    useEffect(() => {
        storage.refFromURL(props.coverUrl).getDownloadURL()
            .then(setCoverUrl)
            .catch(err => {
                console.log('Unable to fetch cover URL');
            })
    })

    const handleClick = (link) => {
        props.history.push(link)
    };

    const categories = (props.categories || []).map(tag => <Tag>{tag}</Tag>)

    return(
        <div
            className={styles.Book}
            onClick={() => handleClick(`/books/${props.id}`)}
        >
            <div className={`${styles.Book__description}`}>
                <h3>{props.title}</h3>
                <p>{props.author}</p>
                <p>{props.description}</p>
                <p>{categories}</p>
            </div>
            <div className={styles.Book__inner}>
                <img src={coverUrl} alt="Film"/>
                <h3>{props.title || ""}</h3>
            </div>
        </div>
    )
};

export default withRouter(Book);