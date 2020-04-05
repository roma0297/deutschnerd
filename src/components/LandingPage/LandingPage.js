import React from 'react'
import Jumbotron from './Jumbotron/Jumbotron'
import Features from "./Features/Features";


const landingPage = () => {
    return (
        <>
            <Jumbotron />
            <Features />
            <section>Statistics</section>
        </>
    )
};

export default landingPage;