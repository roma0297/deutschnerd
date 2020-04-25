import React, {useEffect, useState} from 'react';
import Layout from "../../hoc/Layout/Layout";
import styles from "./SerialPage.module.scss";
import {firestore, storage} from "../../../init-firebase";
import Spinner from "../../UI/Spinner/Spinner";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Episodes from "./Episodes/Episodes";

const SerialPage = (props) => {
    let [serialInformation, setSerialInformation] = useState({})
    let [coverUrl, setCoverUrl] = useState(null)
    let [loading, setLoading] = useState(true)
    let [seasons, setSeasons] = useState(null)

    useEffect(() => {
        firestore.collection(`series`).doc(props.match.params.id).get()
            .then(doc => {
                console.log(JSON.stringify(doc.data(), null, 2))
                const film = doc.data()
                setSerialInformation(film)
                return film
            })
            .then(() => {
                storage.refFromURL(serialInformation.coverUrl).getDownloadURL()
                    .then(url => {
                        console.log(url)
                        setCoverUrl(url)
                        setLoading(false)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

        firestore.collection(`series/${props.match.params.id}/seasons`).get()
            .then(data => {
               setSeasons(data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })));
            })
    }, [props.match.params.id, serialInformation.coverUrl])

    if (loading) {
        return <Spinner/>
    }
    
    return (
        <Layout>
            <div className={styles.SerialContainer}>
                <aside className={styles.SerialContainer__left}>
                    <img src={coverUrl} alt="film"/>
                    <h3>{serialInformation.title}</h3>
                    <p><span>Duration: </span>{serialInformation.duration} min. </p>
                    <p><span>Status: </span>{serialInformation.status} </p>
                    <p><span>Year: </span>{serialInformation.year} </p>
                    <p><span>IMDB: </span>{serialInformation.rating}</p>
                </aside>
                <main className={styles.SerialContainer__right}>
                    <ul>
                        {(seasons || []).map( season => (<li><NavLink to={`/series/${props.match.params.id}/seasons/${season.id}`}>{`Season ${season.number}`}</NavLink></li>))}
                    </ul>
                    <Switch>
                        <Route path={`/series/:serialId/seasons/:seasonId`} component={Episodes}/>
                    </Switch>
                </main>
            </div>
        </Layout>
    )
}

export default SerialPage