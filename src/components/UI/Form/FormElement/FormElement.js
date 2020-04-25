import React from 'react';
import styles from './FormElement.module.scss'
import Editor from "./Editor/Editor";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const FormElement = (props) => {
    let formElement
    switch (props.elementType) {
        case 'editor':
            formElement = (
                <Editor
                    {...props.elementConfig}
                    onChange={props.onChangeHandler}
                    value={props.value}
                />)
            break;
        case 'textarea':
            formElement = (
                <textarea
                    className={styles.FormElement__textarea}
                    {...props.elementConfig}
                    onChange={event => props.onChangeHandler(event.target.value)}
                    value={props.value}
                />)
            break;
        case 'tags':
            formElement=(
                <Autocomplete
                    multiple
                    id={props.elementConfig.id}
                    options={props.elementConfig.options}
                    getOptionLabel={(option) => option}
                    defaultValue={[]}
                    renderInput={(params) => (
                        <TextField
                            fullWidth
                            {...params}
                            variant="outlined"
                            label={props.label}
                            placeholder={props.elementConfig.placeholder}
                        />
                    )}
                />
            )
            break;
        default:
            formElement = (
                <TextField
                    fullWidth
                    id={props.elementConfig.id}
                    label={props.label}
                    onChange={event => props.onChangeHandler(event.target.value)}
                    type={props.elementConfig.type}
                    value={props.value}
                    variant="outlined" />
            )
    }


    return (
        <div className={styles.FormElement}>
            {formElement}
        </div>
    );
};

export default FormElement;