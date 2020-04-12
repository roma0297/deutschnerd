import React, {useState} from 'react';
import FormElement from './Input/FormElement';
import * as actions from '../../../store';
import {connect} from 'react-redux';
import styles from './AuthForm.module.scss';

const SignInForm = (props) => {
    const [inputs, setInputs] = useState({
        email: {
            label: 'Email',
            elementConfig: {
                placeholder: 'Email',
                type: 'email',
                id: 'email'
            },
            value: ''
        },
        password: {
            label: 'Password',
            elementConfig: {
                placeholder: 'Password',
                type: 'password',
                id: 'password'
            },
            value: ''
        }
    });

    const onChangeHandler = (event, inputIdentifier) => {
        const updatedInputs = {...inputs};
        const updatedFormElement = {...updatedInputs[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedInputs[inputIdentifier] = updatedFormElement;
        setInputs(updatedInputs);
    };

    const registrationFormSubmitHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in inputs) {
            formData[formElementIdentifier] = inputs[formElementIdentifier].value
        }
        props.onSignIn(formData);
    };

    const formElements = Object.keys(inputs)
        .map(key => <FormElement
                key={key}
                {...inputs[key]}
                onChangeHandler={(event) => onChangeHandler(event, key)}
            />
        );

    return (
        <div className={styles.AuthFormContainer}>
            <h2>Sign in to your Deutschnerd Account</h2>
            <p>to continue learning</p>

            <form onSubmit={registrationFormSubmitHandler}>
                {formElements}
                <div className={styles.AuthFormButtonContainer}>
                    <button className={styles.AuthFormButtonContainer__button} type="submit">Войти</button>
                </div>
            </form>
        </div>
    )
};


const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (formData) => dispatch(actions.signIn(formData))
    };
};

export default connect(null, mapDispatchToProps) (SignInForm);