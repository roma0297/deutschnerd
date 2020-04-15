import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import axios from "axios";
import Layout from "../../hoc/Layout/Layout";

const VocabularyTopicPage = props => {
    let [topic, setTopic] = useState({});

    useEffect(() => {
        axios.get(`https://dn-app-c1adb.firebaseio.com/vocabulary/topics/${props.match.params.id}.json?auth=${props.token}`)
            .then(res => setTopic(res.data))
            .catch(err => console.log(err));
    }, [props.match.params.id, props.token])

    return (
        <Layout>
            <div>Topic title: {topic.title}</div>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(VocabularyTopicPage)