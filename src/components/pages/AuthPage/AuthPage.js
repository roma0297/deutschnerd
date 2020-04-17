import React from 'react';
import styles from './AuthPage.module.scss'
import SignInForm from "./forms/SignInForm";
import Spinner from "../../UI/Spinner/Spinner";
import {Redirect} from 'react-router-dom';
import {auth} from "../../../init-firebase";

const AuthPage = (props) => {

    let form = (<SignInForm/>);

    if (props.loading) {
        form = (<Spinner/>);
    }

    console.log('AuthPage component', auth.currentUser);

    if (auth.currentUser) {
        return <Redirect to="/"/>
    } else {
        return (
            <section className={styles.AuthSection}>
                {form}
            </section>
        );
    }
};

export default AuthPage;