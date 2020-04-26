import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import {withRouter} from 'react-router';
import {firestore} from "../../../init-firebase";
import styles from './ArticlePage.module.scss'
import Tag from "../../UI/Tag/Tag";

const ArticlePage = (props) => {
    let [article, setArticle] = useState({})

    useEffect(() => {
        firestore.collection(`articles`).doc(props.match.params.id).get().then(doc => {
            console.log(doc)
            setArticle(doc.data())
        });
    }, [props.match.params.id, props.token])

    const tags = (article.tags || []).map(tag => <Tag>{tag}</Tag>)

    return(
        <Layout>
            <article className={styles.TextContainer}>
                <h1>{article.title}</h1>
                <div dangerouslySetInnerHTML={{__html: article.text}}/>
                <div className={styles.TextContainer__tags}>{tags}</div>
            </article>
        </Layout>
    )
};

export default withRouter(ArticlePage);