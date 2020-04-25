import React from 'react';
import Modal from "../../../../../UI/Modal/Modal";
import {firestore} from "../../../../../../init-firebase";
import Button from "../../../../../UI/Button/Button";
import styles from './ArticleDeleteModal.module.scss'

const ArticleDeleteModal = (props) => {
    const handleClick = e => {
        e.preventDefault()
        firestore.collection("articles").doc(props.article.id).delete()
            .then(props.clicked())
            .catch(err => console.log(err));
    }

    console.log(props.article);
    return (
        <Modal show={props.show} clicked={props.clicked}>
            <h2>Are you sure you want to delete an article "{props.article.title}"?</h2>
            <div className={styles.ArticleDeleteModal__footer}>
                <Button color='primary' variant='outlined' onClick={() => props.clicked()}>Cancel</Button>
                <Button color='danger' variant='contained' onClick={handleClick}>Delete</Button>
            </div>
        </Modal>
    );
}

export default ArticleDeleteModal;