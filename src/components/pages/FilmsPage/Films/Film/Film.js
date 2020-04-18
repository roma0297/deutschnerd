import React, {useState} from 'react';
import styles from "./Film.module.scss";
import {withRouter} from 'react-router';

const Film = (props) => {
    let [hover, setHover] = useState(false);

    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div
            className={styles.Film}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handleClick(`/films/${props.id}`)}
        >
            {hover ? (
                <div className={`${styles.Film__inner} ${styles.Film__inner_hover}`}>
                    <h3>{props.title}</h3>
                    <p>
                        <span>{props.duration} min. </span>
                        <span>{props.year} </span>
                        <span>IMDB: {props.rating}</span>
                    </p>
                    <p>{props.description}</p>
                </div>
            ) : (
                <>
                    <div className={styles.Film__inner}>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/dn-application.appspot.com/o/Film%20covers%2F9855.jpg?alt=media&token=bd1f7742-a777-4aa3-859b-4582e5c81486"}/>
                        <h3>{props.title || ""}</h3>
                    </div>
                </>
            )}
        </div>
    )
}

export default withRouter(Film);