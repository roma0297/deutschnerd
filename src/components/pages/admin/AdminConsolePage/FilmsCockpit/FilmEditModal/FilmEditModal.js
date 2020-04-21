import React from 'react';
import Modal from "../../../../../UI/Modal/Modal";

const FilmEditModal = (props) => (
    <Modal show={props.show} clicked={props.clicked}>
        {props.film.title}
    </Modal>
);

export default FilmEditModal;