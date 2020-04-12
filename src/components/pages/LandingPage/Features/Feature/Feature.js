import React from 'react';
import './Feature.modules.css'

const feature = (props) => {

    const classes = props.reverse ? ["feature-item", "flex-reverse"] : ["feature-item"];

    return (
        <div className={classes.join(" ")}>
            <div className="feature-item-text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="feature-item-image">
                <img
                    src={props.imageReference}
                    alt="triangle with all three sides equal"/>
            </div>
        </div>
    );
};

export default feature;