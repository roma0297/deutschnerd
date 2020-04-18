import React, {useEffect, useState} from 'react';
import {firestore} from "../../../../init-firebase";
import Spinner from "../../../UI/Spinner/Spinner";
import styles from "./Series.module.scss";
import Serial from "./Serial/Serial";

const Series = () => {
    let [series, setSeries] = useState({});
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        firestore.collection("series").get().then(data => {
            setSeries(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
            setLoading(false)
        });
    }, [])

    if (loading) return <Spinner/>

    return (
        <div className={styles.SeriesContainer}>
            {
                Object.keys(series).map((id) => <Serial key={id} {...series[id]} />)
            }
        </div>
    );
}

export default Series;