import React, {useEffect, useState} from 'react';
import Layout from "../../hoc/Layout/Layout";
import {firestore, storage} from "../../../init-firebase";
import Spinner from "../../UI/Spinner/Spinner";
import styles from './FilmPage.module.scss'

const FilmPage = (props) => {
    let [filmInformation, setFilmInformation] = useState({})
    let [filmUrl, setFilmUrl] = useState(null)
    let [coverUrl, setCoverUrl] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        firestore.collection(`films`).doc(props.match.params.id).get()
            .then(doc => {
                console.log(doc.data())
                const film = doc.data()
                setFilmInformation(film)
                return film
            })
            .then(() => {
                console.log(filmInformation.videoUrl)
                storage.refFromURL(filmInformation.videoUrl).getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setFilmUrl(url)
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
                storage.refFromURL(filmInformation.coverUrl).getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setCoverUrl(url)
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    }, [filmInformation.coverUrl, filmInformation.videoUrl, props.match.params.id])

    if (loading) {
        return <Spinner/>
    }

    return (
        <Layout>
            <div className={styles.FilmContainer}>
                <aside className={styles.FilmContainer__left}>
                    <img src={coverUrl} alt="Film"/>
                    <h3>{filmInformation.title}</h3>
                    <p><span>Duration: </span>{filmInformation.duration} min. </p>
                    <p><span>Year: </span>{filmInformation.year} </p>
                    <p><span>IMDB: </span>{filmInformation.rating}</p>
                </aside>
                <figure className={styles.FilmContainer__video}>
                    <video controls>
                        <source src={filmUrl} type="video/mp4"/>
                    </video>
                    <figcaption>
                        <p>{filmInformation.description}</p>
                    </figcaption>
                </figure>
            </div>
        </Layout>
    )
}

export default FilmPage