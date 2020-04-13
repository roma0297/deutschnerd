import React from 'react';
import styles from './Help.module.scss'
import {Link} from 'react-router-dom';

const Help = () => (
    <div className={styles.HelpContainer}>
        <Link to="/">Help</Link>
    </div>
);

export default Help;