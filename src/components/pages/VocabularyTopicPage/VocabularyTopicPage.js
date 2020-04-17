import React, {useEffect, useState} from 'react';
import Layout from "../../hoc/Layout/Layout";
import {firestore} from "../../../init-firebase";

const VocabularyTopicPage = props => {
    let [topic, setTopic] = useState({});

    useEffect(() => {
        firestore.collection(`vocabulary`).doc(props.match.params.id).get().then(doc => {
            console.log(doc)
            setTopic(doc.data())
        });
    }, [props.match.params.id, props.token])

    return (
        <Layout>
            <div>Topic title: {topic.title}</div>
        </Layout>
    )
}

export default VocabularyTopicPage