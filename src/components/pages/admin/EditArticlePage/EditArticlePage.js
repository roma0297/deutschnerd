import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './EditArticlePage.module.scss'
import Form from "../../../UI/Form/Form";
import Button from "@material-ui/core/Button";
import {firestore} from "../../../../init-firebase";

const EditArticlePage = () => {
    const [inputs, setInputs] = useState({
        title: {
            label: 'Title',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Title',
                type: 'text',
                id: 'title'
            },
            value: ''
        },
        timeToRead: {
            label: 'Approximate time to read',
            elementType: 'input',
            elementConfig: {
                placeholder: 'Approximate time to read',
                type: 'number',
                id: 'timeToRead',
                min: "1",
                max: "500",
            },
            value: ''
        },
        tags: {
            label: 'Tags',
            elementType: 'tags',
            elementConfig: {
                placeholder: 'Tags',
                id: 'tags',
                options: ['IT', 'Science', 'Relationship']
            },
            value: ''
        },
        text: {
            label: 'Article text',
            elementType: 'editor',
            elementConfig: {
                id: 'text'
            },
            value: ''
        }
    });

    const handleSubmit = () => {
        let formData = {}
        Object.keys(inputs).forEach(key => formData[key] = inputs[key].value)
        firestore.collection("articles").add(formData)
            .catch(err => console.log(err));
    };

    return (
        <div className={styles.EditArticlePage}>
            <h2>Editing article</h2>
            <Form inputs={inputs} setInputs={setInputs}/>
            <div>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                    Опубликовать
                </Button>
            </div>
        </div>
    );
}

export default EditArticlePage;