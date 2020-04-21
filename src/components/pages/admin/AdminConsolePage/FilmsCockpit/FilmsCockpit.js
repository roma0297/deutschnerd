import React, {useEffect, useState} from 'react';
import {firestore} from "../../../../../init-firebase";
import styles from './FilmsCockpit.module.scss'
import FilmEditModal from "./FilmEditModal/FilmEditModal";

const FilmsCockpit = () => {
    let [films, setFilms] = useState([]);
    let [filmToBeEdited, setFilmToBeEdited] = useState(null)
    let [editing, setEditing] = useState(false)


    useEffect(() => {
        firestore.collection('films').get()
            .then(data => {
                setFilms(data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
            .catch(err => console.log(err))
    }, [])

    if (!Array.isArray(films) || !films.length) {
        return null
    }

    const filmsList = films.map(film => (
        <div className={styles.Film}>
            <h3 className={styles.Film__title}>{film.title}</h3>
            <button
                className={`${styles.Film__button} ${styles.Film__button_primary}`}
                onClick={() => {
                    setFilmToBeEdited(film)
                    setEditing(true)
                }}
            >
                Edit
            </button>
            <button
                className={`${styles.Film__button} ${styles.Film__button_danger}`}
            >
                Delete
            </button>
        </div>
    ))

    return (
        <>
            {/*{JSON.stringify(films)}*/}
            <FilmEditModal
                show={editing}
                clicked={() => setEditing(false)}
                film={filmToBeEdited || films[0]}
            />
            <div className={styles.FilmsCockpit}>
                {filmsList}
            </div>
        </>
    );
}

export default FilmsCockpit;