import React from 'react'
import styles from './Tag.module.scss'
import {Link} from "react-router-dom";

const Tag = props => (
    <span>
        <Link className={styles.Tag}>
            {props.children}
        </Link>
    </span>);

export default Tag