import React from 'react';
import {withRouter} from "react-router";
import styles from './Category.module.scss'

const category = (props) => {

    const changeRoute = (link) => props.history.push(link);

    return (
        <div className={`${props.className} ${styles.Category}`} onClick={() => changeRoute(props.link)}>
            <div className={styles.Category__info}/>
            <div className={styles.Category__description}>
                {props.description}
            </div>
            <h3 className={styles.Category__title}>{props.title}</h3>
        </div>
    );
};

export default withRouter(category);