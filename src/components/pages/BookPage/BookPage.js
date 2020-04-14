import React, {useEffect, useState} from 'react';
import Layout from '../../hoc/Layout/Layout';
import axios from 'axios';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

const BookPage = (props) => {
    let [book, setBook] = useState({})

    useEffect(() => {
        console.log(props.token)
        axios.get(`https://dn-app-c1adb.firebaseio.com/books/${props.match.params.id}.json?auth=${props.token}`)
            .then(res => setBook(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.id, props.token])

    return(
        <Layout>
            <div>Book name: {book.name}</div>
        </Layout>
    )
};

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps) (withRouter(BookPage));