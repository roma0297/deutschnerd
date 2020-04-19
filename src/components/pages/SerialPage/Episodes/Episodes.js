import React, {useEffect, useState} from 'react';
import {withRouter} from 'react-router';
import {firestore} from "../../../../init-firebase";
import Episode from "./Episode/Episode";
import styles from './Episodes.module.scss'

const Episodes = (props) => {
    let [episodes, setEpisodes] = useState([])

    useEffect(() => {
        firestore.collection(`series/${props.match.params.serialId}/seasons/${props.match.params.seasonId}/episodes`).get()
            .then(data => {
                setEpisodes(data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })

    }, [props.match.params.serialId, props.match.params.seasonId])

    return (
        <div className={styles.Episodes}>
            {
                (episodes || []).map(episode => <Episode key={episode.id} {...episode}/>)
            }
        </div>
    );
}

export default withRouter(Episodes)