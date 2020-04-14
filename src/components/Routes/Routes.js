import {Route, Switch} from "react-router/esm/react-router";
import LandingPage from '../pages/LandingPage/LandingPage';
import MainPage from '../pages/MainPage/MainPage';
import LevelsPage from '../pages/LevelsPage/LevelsPage';
import MaterialsPage from '../pages/MaterialsPage/MaterialsPage';
import AccountPage from '../pages/AccountPage/AccountPage';
import React from 'react';
import VocabularyPage from '../pages/VocabularyPage/VocabularyPage';
import BooksPage from '../pages/BooksPage/BooksPage';
import ArticlesPage from '../pages/ArticlesPage/ArticlesPage';
import LoginPage from '../pages/AuthPage/AuthPage';
import Logout from '../hoc/Layout/Header/NavigationBar/Logout/Logout';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import LessonAlphabet from '../modules/module1/lesson1/LessonAlphabet';
import BookPage from '../pages/BookPage/BookPage';
import ArticlePage from '../pages/ArticlePage/BookPage';

const routes = (props) => {
    let routes = props.isAuthenticated
        ? (
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/levels" exact component={LevelsPage}/>
                <Route path="/materials" exact component={MaterialsPage}/>
                <Route path="/account" exact component={AccountPage}/>
                <Route path="/vocabulary" exact component={VocabularyPage}/>
                <Route path="/books" exact component={BooksPage}/>
                <Route path="/books/:id" component={BookPage}/>
                <Route path="/articles" exact component={ArticlesPage}/>
                <Route path="/articles/:id" exact component={ArticlePage}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/exercise" component={LessonAlphabet}/>
                <Redirect to="/"/>
            </Switch>
        )
        : (
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" component={LoginPage}/>
                <Redirect to="/"/>
            </Switch>
        );

    return routes;
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token
    }
};

export default connect(mapStateToProps)(routes);