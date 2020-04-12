import {Route, Switch} from "react-router";
import LandingPage from "../LandingPage/LandingPage";
import MainPage from "../MainPage/MainPage";
import LevelsPage from "../LevelsPage/LevelsPage";
import MaterialsPage from "../MaterialsPage/MaterialsPage";
import AccountPage from "../AccountPage/AccountPage";
import React from "react";
import VocabularyPage from "../VocabularyPage/VocabularyPage";
import BooksPage from "../BooksPage/BooksPage";
import ArticlesPage from "../ArticlesPage/ArticlesPage";
import LoginPage from "../AuthPage/AuthPage";

const routes = () => (
    <Switch>
        <Route path="/" exact component={LandingPage}/>
        <Route path="/main" exact component={MainPage}/>
        <Route path="/levels" exact component={LevelsPage}/>
        <Route path="/materials" exact component={MaterialsPage}/>
        <Route path="/account" exact component={AccountPage}/>
        <Route path="/vocabulary" component={VocabularyPage}/>
        <Route path="/books" component={BooksPage}/>
        <Route path="/articles" component={ArticlesPage}/>
        <Route path="/login" component={LoginPage}/>
    </Switch>
);

export default routes;