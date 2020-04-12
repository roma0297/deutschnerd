import React from 'react';
import styles from './AuthPage.module.scss'
import SignInForm from "./forms/SignInForm";

const AuthPage = () => {

    return (
        <section className={styles.AuthSection}>
            <SignInForm/>
        </section>
    )
};

export default AuthPage;