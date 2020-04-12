import {Route, Switch} from "react-router";
import LandingPage from "../pages/LandingPage/LandingPage";
import MainPage from "../pages/MainPage/MainPage";
import LevelsPage from "../pages/LevelsPage/LevelsPage";
import MaterialsPage from "../pages/MaterialsPage/MaterialsPage";
import AccountPage from "../pages/AccountPage/AccountPage";
import React from "react";
import VocabularyPage from "../pages/VocabularyPage/VocabularyPage";
import BooksPage from "../pages/BooksPage/BooksPage";
import ArticlesPage from "../pages/ArticlesPage/ArticlesPage";
import LoginPage from "../pages/AuthPage/AuthPage";

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