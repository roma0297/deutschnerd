import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import {firestore} from "../../../init-firebase.js";

const FilmsPage = () => {
    let [films, setFilms] = useState({});

    useEffect(() => {
        firestore.collection("films").get().then(data => {
            console.log(data)
            setFilms(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })))
        });
    }, [])

   console.log(films)

    return (
        <Layout>
            <div>Films Page</div>
            {JSON.stringify(films)}
        </Layout>
    );
}

export default FilmsPage;