import React, {useEffect, useState} from 'react';
import styles from './Article.module.scss'
import {withRouter} from "react-router";
import ArticleFooter from "./ArticleFooter/ArticleFooter";
import {storage} from "../../../../../init-firebase";

const Article = (props) => {
    let [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        storage.refFromURL(props.imageUrl).getDownloadURL()
            .then(url => {
                console.log(url)
                setImageUrl(url)
            })
            .catch(err => console.log(err))
    })

    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div className={styles.Article} onClick={() => handleClick(`/articles/${props.id}`)}>
            <img className={styles.Article__img} src={imageUrl}/>
            <ArticleFooter {...props}/>
        </div>
    )
};

export default withRouter(Article);