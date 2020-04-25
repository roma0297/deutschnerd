import React, {useCallback, useState} from 'react';
import FormElement from './Input/FormElement';
import styles from './AuthForm.module.scss';
import {auth} from "../../../../init-firebase";
import {withRouter} from "react-router";
import Spinner from "../../../UI/Spinner/Spinner";

const SignInForm = (props) => {
    const [loading, setLoading] = useState(false);
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

    const signInHandler = useCallback(
        async event => {
            event.preventDefault();
            setLoading(true)
            try {
                await auth.signInWithEmailAndPassword(inputs.email.value, inputs.password.value).catch(err => console.log(err))
                props.history.push('/')
            } catch (err) {
                console.log(err);
            }
        }, [inputs.email.value, inputs.password.value, props.history]
    )

    const formElements = Object.keys(inputs)
        .map(key => <FormElement
                key={key}
                {...inputs[key]}
                onChangeHandler={(event) => onChangeHandler(event, key)}
            />
        );

    if (loading) {
        return <Spinner/>;
    }

    return (
        <div className={styles.AuthFormContainer}>
            <h2>Sign in to your Deutschnerd Account</h2>
            <p>to continue learning</p>

            <form onSubmit={signInHandler}>
                {formElements}
                <div className={styles.AuthFormButtonContainer}>
                    <button className={styles.AuthFormButtonContainer__button} type="submit">Войти</button>
                </div>
            </form>
        </div>
    )
};

export default withRouter(SignInForm);