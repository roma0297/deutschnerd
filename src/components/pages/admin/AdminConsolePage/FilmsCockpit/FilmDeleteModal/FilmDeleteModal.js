import React from 'react';
import Modal from "../../../../../UI/Modal/Modal";
import {firestore} from "../../../../../../init-firebase";

const FilmDeleteModal = (props) => {
    const handleClick = e => {
        e.preventDefault()
        firestore.collection("films").doc(props.film.id).delete()
            .then(props.clicked())
            .catch(err => console.log(err));
    }

    return (
        <Modal show={props.show} clicked={props.clicked}>
            <button onClick={() => props.clicked()}>Cancel</button>
            <button onClick={handleClick}>Delete</button>
        </Modal>
    );
}

export default FilmDeleteModal;