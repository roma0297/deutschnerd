import React, {useEffect, useState} from 'react';
import Layout from "../../hoc/Layout/Layout";
import {firestore, storage} from "../../../init-firebase";
import Spinner from "../../UI/Spinner/Spinner";

const FilmPage = (props) => {
    let [filmInformation, setFilmInformation] = useState({})
    let [filmUrl, setFilmUrl] = useState(null)
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        firestore.collection(`films`).doc(props.match.params.id).get()
            .then(doc => {
                console.log(doc)
                setFilmInformation(doc.data())
            })
            .then(() => {
                storage.refFromURL('gs://dn-application.appspot.com/Winter Saint Petersburg Russia 6K. Shot on Zenmuse X7 Drone__ Зимний Петербург, аэросъёмка.mp4').getDownloadURL()
                    .then(url => {
                        setFilmUrl(url)
                        console.log('Video URL: ', url)
                        setLoading(false)
                    })
            })

    }, [props.match.params.id])

    if (loading) {
        return <Spinner/>
    }

    return (
        <Layout>
            <video controls>
                <source src={filmUrl} type="video/mp4"/>
            </video>
        </Layout>
    )
}

export default FilmPage