import React from 'react';
import styles from './ArticleFooter.module.scss'
import Tag from "../../../../../UI/Tag/Tag";

const ArticleFooter = props => {
    const tags = (props.tags || []).map(tag => <Tag>{tag}</Tag>)

    console.log(props.publicationDate);
    return (
        <div className={styles.ArticleFooter}>
            <h3 className={styles.ArticleFooter__title}>{props.title}</h3>
            <div className={styles.ArticleFooter__tags}>
                {tags}
            </div>
            <div className={styles.ArticleFooter__info}>
                <span>{props.timeToRead} min read</span>
                <span>{new Date(props.publicationDate.seconds * 1000).toDateString()}</span>
            </div>
        </div>
    );
}

export default ArticleFooter;