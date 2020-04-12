import React from 'react';
import styles from './FormElement.module.scss'

const FormElement = (props) => {
    return (
        <div className={styles.FormElement}>
            <label
                className={styles.FormElement__label}
                htmlFor={props.elementConfig.id}>
                {props.label}
            </label>

            <input
                className={styles.FormElement__input}
                {...props.elementConfig}
                onChange={props.onChangeHandler}
                value={props.value}/>
        </div>
    );
};

export default FormElement;