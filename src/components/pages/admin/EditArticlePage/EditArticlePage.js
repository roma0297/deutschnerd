import React, {useState} from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './EditArticlePage.module.scss'
import Form from "../../../UI/Form/Form";

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

    return (
        <div className={styles.EditArticlePage}>
            <h2>Editing article</h2>
            <Form inputs={inputs} setInputs={setInputs}/>
            <button onClick={() => {console.log(inputs)}}>sdfs</button>
        </div>
    );
}

export default EditArticlePage;