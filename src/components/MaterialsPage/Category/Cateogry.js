import React from 'react';

const changeRoute = (methodProperties) => {
    console.log(methodProperties)
};

const category = (props) => {

    return (
        <div className={props.className} onClick={() => changeRoute(props.link)}>
            <h3>{props.title}</h3>
            <h3>{props.description || ""}</h3>
        </div>
    );
};

export default category;