import React, {useEffect, useState} from 'react'
import {firestore} from "../../../../../init-firebase";
import styles from "../FilmsCockpit/FilmsCockpit.module.scss";
import ArticleTile from "./ArticleTile/ArticleTile";
import {withRouter} from 'react-router';
import ArticleDeleteModal from "./ArticleDeleteModal/ArticleDeleteModal";

const ArticlesCockpit = () => {
    let [articles, setArticles] = useState([]);
    let [articleToBeDeleted, setArticleToBeDeleted] = useState(null)
    let [deleting, setDeleting] = useState(false)

    useEffect(() => {
        firestore.collection('articles').get()
            .then(data => {
                setArticles(data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
            .catch(err => console.log(err))
    }, [deleting])

    const deleteHandler = (article) => {
        setArticleToBeDeleted(article)
        setDeleting(true)
    }

    const articlesList = articles.map(article => (
        <ArticleTile article={article} deleteHandler={() => deleteHandler(article)}/>
    ))

    return (
        <>
            <ArticleDeleteModal
                show={deleting}
                clicked={() => setDeleting(false)}
                article={articleToBeDeleted || {}}
            />
            <div className={styles.FilmsCockpit}>
                <h1>Статьи</h1>
                {articlesList}
            </div>
        </>
    );
}

export default withRouter(ArticlesCockpit);