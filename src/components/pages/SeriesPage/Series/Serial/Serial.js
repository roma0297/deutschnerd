import React, {useEffect, useState} from 'react';
import styles from "./Serial.module.scss";
import {storage} from "../../../../../init-firebase";
import {withRouter} from "react-router";

const Serial = (props) => {
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

    return (
        <div className={styles.Serial} onClick={() => handleClick(`/series/${props.id}`)}>
            <div className={`${styles.Serial__description}`}>
                <h3>{props.title}</h3>
                <p>
                    <span>{props.duration} min. </span>
                    <span>{props.year} </span>
                    <span>IMDB: {props.rating}</span>
                </p>
                <p>{props.description}</p>
            </div>
            <div className={styles.Serial__inner}>
                <img src={coverUrl} alt="Serial"/>
                <h3>{props.title || ""}</h3>
            </div>
        </div>
    );
}

export default withRouter(Serial);