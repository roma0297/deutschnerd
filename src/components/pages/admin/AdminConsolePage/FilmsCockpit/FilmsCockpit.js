import React, {useEffect, useState} from 'react';
import {firestore} from "../../../../../init-firebase";
import styles from './FilmsCockpit.module.scss'
import FilmEditModal from "./FilmEditModal/FilmEditModal";
import FilmDeleteModal from "./FilmDeleteModal/FilmDeleteModal";

const FilmsCockpit = () => {
    let [films, setFilms] = useState([]);
    let [filmToBeEdited, setFilmToBeEdited] = useState(null)
    let [editing, setEditing] = useState(false)
    let [deleting, setDeleting] = useState(false)
    let [filmToBeDeleted, setFilmToBeDeleted] = useState(null)

    useEffect(() => {
        firestore.collection('films').get()
            .then(data => {
                setFilms(data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })))
            })
            .catch(err => console.log(err))
    }, [editing, deleting])

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
                onClick={() => {
                    setFilmToBeDeleted(film)
                    setDeleting(true)
                }}
            >
                Delete
            </button>
        </div>
    ))

    return (
        <>
            <FilmEditModal
                show={editing}
                clicked={() => setEditing(false)}
                film={filmToBeEdited || films[0]}
            />
            <FilmDeleteModal
                show={deleting}
                clicked={() => setDeleting(false)}
                film={filmToBeDeleted || films[0]}
            />
            <div className={styles.FilmsCockpit}>
                {filmsList}
            </div>
        </>
    );
}

export default FilmsCockpit;