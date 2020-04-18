import React from 'react'
import styles from './NavigationBar.module.scss'
import {NavLink} from "react-router-dom";

const navigationBar = () => (
    <div className={styles.NavigationBar}>
        <nav className={styles.NavigationBar__inner}>
            <ul>
                <li><NavLink to="/">Main</NavLink></li>
                <li><NavLink to="/levels">Levels</NavLink></li>
                <li><NavLink to="/materials">Materials</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/account" exact>My Account</NavLink></li>
                <li><NavLink to="/logout" exact>Logout</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default navigationBar;