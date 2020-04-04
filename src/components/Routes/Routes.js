import {Route} from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../MainPage/MainPage";
import LevelsPage from "../LevelsPage/LevelsPage";
import MaterialsPage from "../MaterialsPage/MaterialsPage";
import AccountPage from "../AccountPage/AccountPage";
import React from "react";


const routes = () => (
    <>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/main" exact component={MainPage}/>
        <Route path="/levels" exact component={LevelsPage}/>
        <Route path="/materials" exact component={MaterialsPage}/>
        <Route path="/account" exact component={AccountPage}/>
    </>
);

export default routes;