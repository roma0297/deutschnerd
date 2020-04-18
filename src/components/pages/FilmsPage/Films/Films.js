import React, {useEffect, useState} from 'react';
import {firestore} from "../../../../init-firebase";
import styles from "./Films.module.scss";
import Film from "./Film/Film";
import Spinner from "../../../UI/Spinner/Spinner";

const Films = () => {
    let [films, setFilms] = useState({});
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        firestore.collection("films").get().then(data => {
            console.log(data)
            setFilms(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
            setLoading(false)
        });
    }, [])

    if (loading) return <Spinner/>

    return (
        <div className={styles.FilmsContainer}>
            {
                Object.keys(films).map((id) => <Film key={id} {...films[id]} />)
            }
        </div>
    );
}

export default Films;