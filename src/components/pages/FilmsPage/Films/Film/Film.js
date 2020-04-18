import React from 'react';
import styles from "./Film.module.scss";
import {withRouter} from 'react-router';

const Film = (props) => {
    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div className={styles.Film} onClick={() => handleClick(`/films/${props.id}`)}>
            <div className={styles.Film__inner}>
                <h3>{props.title || ""}</h3>
            </div>
        </div>
    )
}

export default withRouter(Film);