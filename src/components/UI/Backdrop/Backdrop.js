import React from 'react';
import styles from './Backdrop.module.scss'

const Backdrop = (props) => (
    props.show ? <div onClick={props.clicked} className={styles.Backdrop}/> : null
);

export default Backdrop;