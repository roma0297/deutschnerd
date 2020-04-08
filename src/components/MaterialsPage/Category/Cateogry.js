import React from 'react';
import {withRouter} from "react-router";

const category = (props) => {

    const changeRoute = (link) => props.history.push(link);

    return (
        <div className={props.className} onClick={() => changeRoute(props.link)}>
            <h3>{props.title}</h3>
            <h3>{props.description || ""}</h3>
        </div>
    );
};

export default withRouter(category);