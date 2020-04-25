import React from 'react'
import styles from './Button.module.scss'

const capitalizeString = str => str[0].toUpperCase() + str.slice(1)

const Button = (props) => {
    let classes = [styles.Button, styles[`Button_${props.variant}${capitalizeString(props.color)}`]]

    return (
        <button onClick={props.onClick} className={classes.join(" ")}>{props.children}</button>
    );
}

export default Button