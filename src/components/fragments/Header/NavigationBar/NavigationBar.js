import React from 'react'
import styles from './NavigationBar.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Logout from "./Logout/Logout";

const navigationBar = (props) => {
    console.log('Navigation bar rendering with authenticated: ', props.isAuthenticated);
    if (props.isAuthenticated) {
        return (
            <nav className={styles.NavigationBar}>
                <ul>
                    <li><NavLink to="/" exact>Landing Page</NavLink></li>
                    <li><NavLink to="/main">Main</NavLink></li>
                    <li><NavLink to="/levels">Levels</NavLink></li>
                    <li><NavLink to="/materials">Materials</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/account" exact>My Account</NavLink></li>
                    <li><NavLink to="/logout" exact>Logout</NavLink></li>
                </ul>
            </nav>
        )
    } else {
        return <Logout/>
    }
};

const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.token
    };
};

export default connect(mapStateToProps)(navigationBar);