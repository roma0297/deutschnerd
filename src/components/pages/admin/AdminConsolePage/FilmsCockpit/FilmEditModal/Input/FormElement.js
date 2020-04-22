import React from 'react';
import styles from './FormElement.module.scss'

const FormElement = (props) => {
    let formElement = null
    switch (props.elementType) {
        case 'textarea':
            formElement = (
                <textarea
                    className={styles.FormElement__textarea}
                    {...props.elementConfig}
                    onChange={props.onChangeHandler}
                    value={props.value}
                />)
            break;
        default:
            formElement = (
                <input
                    className={styles.FormElement__input}
                    {...props.elementConfig}
                    onChange={props.onChangeHandler}
                    value={props.value}
                />)
    }


    return (
        <div className={styles.FormElement}>
            <label
                className={styles.FormElement__label}
                htmlFor={props.elementConfig.id}>
                {props.label}
            </label>

            {formElement}
        </div>
    );
};

export default FormElement;