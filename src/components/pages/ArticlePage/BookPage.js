import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import axios from 'axios';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const ArticlePage = (props) => {
    let [article, setArticle] = useState({})

    useEffect(() => {
        axios.get(`https://dn-app-c1adb.firebaseio.com/articles/${props.match.params.id}.json?auth=${props.token}`)
            .then(res => setArticle(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.id, props.token])

    return(
        <Layout>
            <div>Article name: {article.title}</div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps) (withRouter(ArticlePage));