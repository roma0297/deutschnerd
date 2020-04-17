import React, {useEffect, useState} from 'react';
import styles from './Articles.module.scss'
import Article from "./Article/Article";
import {firestore} from "../../../../init-firebase";

const Articles = (props) => {
    let [articles, setArticles] = useState({})

    useEffect(() => {
        firestore.collection("articles").get().then(data => {
            console.log(data)
            setArticles(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
    }, [props.token])

    return (
        <div className={styles.ArticlesContainer}>
            {
                Object.keys(articles).map((id) => <Article key={id} {...articles[id]} />)
            }
        </div>
    );
}

export default Articles;