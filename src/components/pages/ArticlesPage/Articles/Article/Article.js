import React from 'react';
import styles from './Article.module.scss'
import {withRouter} from "react-router";

const article = (props) => {
    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div className={styles.Article} onClick={() => handleClick(`/articles/${props.id}`)}>
            <div className={styles.Article__inner}>
                <h3>{props.name || ""}</h3>
            </div>
        </div>
    )
};

export default withRouter(article);