import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import {withRouter} from 'react-router';
import {firestore} from "../../../init-firebase";

const ArticlePage = (props) => {
    let [article, setArticle] = useState({})

    useEffect(() => {
        firestore.collection(`articles`).doc(props.match.params.id).get().then(doc => {
            console.log(doc)
            setArticle(doc.data())
        });
    }, [props.match.params.id, props.token])

    return(
        <Layout>
            <div>Article name: {article.title}</div>
        </Layout>
    )
};

export default withRouter(ArticlePage);