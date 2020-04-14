import {Route, Switch} from "react-router/esm/react-router";
import React from 'react';
import Logout from '../hoc/Layout/Header/NavigationBar/Logout/Logout';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import LessonAlphabet from '../modules/module1/lesson1/LessonAlphabet';
import asyncComponent from "../hoc/asyncComponent";

const LandingPage = asyncComponent(() => import('../pages/LandingPage/LandingPage'));
const MainPage = asyncComponent(() => import('../pages/MainPage/MainPage'));
const LevelsPage = asyncComponent(() => import('../pages/LevelsPage/LevelsPage'));
const MaterialsPage = asyncComponent(() => import('../pages/MaterialsPage/MaterialsPage'));
const AccountPage = asyncComponent(() => import('../pages/AccountPage/AccountPage'));
const VocabularyPage = asyncComponent(() => import('../pages/VocabularyPage/VocabularyPage'));
const BooksPage = asyncComponent(() => import('../pages/BooksPage/BooksPage'));
const ArticlesPage = asyncComponent(() => import('../pages/ArticlesPage/ArticlesPage'));
const LoginPage = asyncComponent(() => import('../pages/AuthPage/AuthPage'));
const BookPage = asyncComponent(() => import('../pages/BookPage/BookPage'));
const ArticlePage = asyncComponent(() => import('../pages/ArticlePage/BookPage'));
const NotFoundPage = asyncComponent(() => import('../pages/NotFoundPage/NotFoundPage'));

const routes = (props) => {
    return props.isAuthenticated
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
                <Route path="/" component={NotFoundPage}/>
            </Switch>
        )
        : (
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/login" component={LoginPage}/>
                <Redirect to="/"/>
            </Switch>
        );
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token
    }
};

export default connect(mapStateToProps)(routes);