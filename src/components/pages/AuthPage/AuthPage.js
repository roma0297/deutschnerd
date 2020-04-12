import React from 'react';
import styles from './AuthPage.module.scss'
import SignInForm from "./forms/SignInForm";
import {connect} from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";
import {Redirect} from 'react-router-dom';

const AuthPage = (props) => {

    let form = (<SignInForm/>);

    if (props.loading) {
        form = (<Spinner/>);
    }

    if (props.isAuthenticated) {
        return <Redirect to="/"/>
    } else {
        return (
            <section className={styles.AuthSection}>
                {form}
            </section>
        );
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        isAuthenticated: state.auth.token
    }
};

export default connect(mapStateToProps)(AuthPage);