import React, {useEffect, useState} from 'react';
import styles from './Articles.module.scss'
import Article from "./Article/Article";
import axios from "axios";
import {connect} from 'react-redux';

const Articles = (props) => {
    let [articles, setArticles] = useState({})

    useEffect(() => {
        axios.get(`https://dn-app-c1adb.firebaseio.com/articles.json?auth=${props.token}`)
            .then(res => setArticles(res.data))
            .catch(err => console.log(err));
    }, [props.token])

    return (
        <div className={styles.ArticlesContainer}>
            {
                Object.keys(articles).map((id) => <Article key={id} id={id} {...articles[id]} />)
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(Articles);