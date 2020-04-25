import React, {useEffect, useState} from 'react';
import styles from "./Film.module.scss";
import {storage} from "../../../../../init-firebase";
import {withRouter} from 'react-router';

const Film = (props) => {
    let [coverUrl, setCoverUrl] = useState('');

    useEffect(() => {
        storage.refFromURL(props.coverUrl).getDownloadURL()
            .then(setCoverUrl)
            .catch(err => {
                console.log('Unable to fetch cover URL');
            })
    }, [props.coverUrl])

    const handleClick = (link) => {
        props.history.push(link)
    };

    return(
        <div
            className={styles.Film}
            onClick={() => handleClick(`/films/${props.id}`)}
        >
            <div className={`${styles.Film__description}`}>
                <h3>{props.title}</h3>
                <p>
                    <span>{props.duration} min. </span>
                    <span>{props.year} </span>
                    <span>IMDB: {props.rating}</span>
                </p>
                <p>{props.description}</p>
            </div>
            <div className={styles.Film__inner}>
                <img src={coverUrl}/>
                <h3>{props.title || ""}</h3>
            </div>
        </div>
    )
}

export default withRouter(Film);