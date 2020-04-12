import React, {useState} from 'react';
import FormElement from "./Input/FormElement";
import styles from "./AuthForm.module.scss";
import * as actions from "../../../../store";
import {connect} from "react-redux";

const SignUpForm = (props) => {
    const [inputs, setInputs] = useState({
        name: {
            label: 'Name',
            elementConfig: {
                placeholder: 'Name',
                type: 'text',
                id: 'name'
            },
            value: ''
        },
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
        },
        checkPassword: {
            label: 'Confirm Password',
            elementConfig: {
                placeholder: 'Confirm Password',
                type: 'password',
                id: 'checkPassword'
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
        props.onSignUp(formData);
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
            <h2>Create your Deutschnerd Account</h2>
            <p>to start learning</p>

            <form onSubmit={registrationFormSubmitHandler}>
                {formElements}
                <div className={styles.AuthFormButtonContainer}>
                    <button className={styles.AuthFormButtonContainer__button} type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
};


const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (formData) => dispatch(actions.signUp(formData))
    };
};

export default connect(null, mapDispatchToProps) (SignUpForm);