import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import {withRouter} from 'react-router';
import {firestore} from "../../../init-firebase";

const BookPage = (props) => {
    let [book, setBook] = useState({})

    useEffect(() => {
        firestore.collection(`books`).doc(props.match.params.id).get().then(doc => {
            console.log(doc)
            setBook(doc.data())
        });
    }, [props.match.params.id])

    return(
        <Layout>
            <div>Book name: {book.title}</div>
        </Layout>
    )
};

export default withRouter(BookPage);