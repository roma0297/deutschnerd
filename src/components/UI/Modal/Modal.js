import React from 'react';
import styles from './Modal.module.scss'
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    const classes = [styles.Modal]

    if (props.show) {
        classes.push(styles.Modal_shown)
    }

    return (
        <>
            {props.show? <Backdrop clicked={props.clicked} show/>: null}
            <div className={classes.join(" ")}>
                {props.children}
            </div>
        </>
    );
}

export default Modal;