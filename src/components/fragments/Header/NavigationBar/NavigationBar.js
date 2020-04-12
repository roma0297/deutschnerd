import React from 'react'
import styles from './NavigationBar.module.scss'
import {NavLink} from "react-router-dom";

const navigationBar = () => (
    <nav className={styles.NavigationBar}>
        <ul>
            <li><NavLink to="/" exact>Landing Page</NavLink></li>
            <li><NavLink to="/main">Main</NavLink></li>
            <li><NavLink to="/levels">Levels</NavLink></li>
            <li><NavLink to="/materials">Materials</NavLink></li>
        </ul>
    </nav>
);

export default navigationBar;