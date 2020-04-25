import React, {useEffect, useState} from 'react';
import Modal from "../../../../../UI/Modal/Modal";
import FormElement from "./Input/FormElement";
import {firestore} from "../../../../../../init-firebase";

const FilmEditModal = (props) => {
    const [inputs, setInputs] = useState({
        title: {
            label: 'Title',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Title',
                type: 'text',
                id: 'title'
            },
            value: 'props.film.title'
        },
        year: {
            label: 'Year',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Year',
                type: 'number',
                id: 'title',
                min: "1900",
                max: "2030",
            },
            value: props.film.year
        },
        duration: {
            label: 'Duration',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Duration',
                type: 'number',
                id: 'title',
                min: "1",
                max: "500",
            },
            value: props.film.duration
        },
        rating: {
            label: 'Rating',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Rating',
                type: 'number',
                id: 'title',
                min: "1",
                max: "10",
                step: "0.1"
            },
            value: props.film.rating
        },
        description: {
            label: 'Description',
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Description',
                type: 'text',
                id: 'description'
            },
            value: props.film.description
        }
    });
    
    useEffect(() => {
        const newInputs = {...inputs}
        Object.keys(inputs)
            .forEach(key => newInputs[key].value = props.film[key])
        setInputs(newInputs);
    }, [props.film])

    const onChangeHandler = (event, inputIdentifier) => {
        const updatedInputs = {...inputs};
        const updatedFormElement = {...updatedInputs[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedInputs[inputIdentifier] = updatedFormElement;
        setInputs(updatedInputs);
    };

    const formElements = Object.keys(inputs)
        .map(key => <FormElement
                key={key}
                {...inputs[key]}
                onChangeHandler={(event) => onChangeHandler(event, key)}
            />
        );

    const handleSubmit = e => {
        e.preventDefault()
        let formData = {}
        Object.keys(inputs).forEach(key => formData[key] = inputs[key].value)
        firestore.collection("films").doc(props.film.id).update(formData)
            .then(props.clicked())
            .catch(err => console.log(err));
    }


    return (
        <Modal show={props.show} clicked={props.clicked}>
            <form onSubmit={handleSubmit}>
                {formElements}
                <input type="submit"/>
            </form>
        </Modal>
    );
}

export default FilmEditModal;