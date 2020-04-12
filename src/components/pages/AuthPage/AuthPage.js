import React from 'react';
import styles from './AuthPage.module.scss'
import SignInForm from "./forms/SignInForm";
import {connect} from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";

const AuthPage = (props) => {

    let form = (<SignInForm/>);

    if (props.loading) {
        form = (<Spinner/>);
    }


    return (
        <section className={styles.AuthSection}>
            {form}
        </section>
    )
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps)(AuthPage);