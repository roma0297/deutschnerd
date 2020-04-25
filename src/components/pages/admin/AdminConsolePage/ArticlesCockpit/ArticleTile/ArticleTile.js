import React from "react";
import styles from "./ArticleTile.module.scss";
import Button from "../../../../../UI/Button/Button";

const ArticleTile = ({article, deleteHandler}) => (
    <div className={styles.ArticleTile}>
        <h3 className={styles.ArticleTile__title}>{article.title}</h3>
        <Button color='primary' variant='contained'>Edit</Button>
        <Button color='danger' variant='contained' onClick={() => deleteHandler()}>Delete</Button>
    </div>
);

export default ArticleTile;