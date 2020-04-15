import {Route, Switch} from "react-router/esm/react-router";
import React from 'react';
import Logout from '../hoc/Layout/Header/NavigationBar/Logout/Logout';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import LessonAlphabet from '../modules/module1/lesson1/LessonAlphabet';
import asyncComponent from "../hoc/asyncComponent";

const AccountPage = asyncComponent(() => import('../pages/AccountPage/AccountPage'));
const ArticlePage = asyncComponent(() => import('../pages/ArticlePage/BookPage'));
const ArticlesPage = asyncComponent(() => import('../pages/ArticlesPage/ArticlesPage'));
const BookPage = asyncComponent(() => import('../pages/BookPage/BookPage'));
const BooksPage = asyncComponent(() => import('../pages/BooksPage/BooksPage'));
const LandingPage = asyncComponent(() => import('../pages/LandingPage/LandingPage'));
const LevelsPage = asyncComponent(() => import('../pages/LevelsPage/LevelsPage'));
const LoginPage = asyncComponent(() => import('../pages/AuthPage/AuthPage'));
const MainPage = asyncComponent(() => import('../pages/MainPage/MainPage'));
const MaterialsPage = asyncComponent(() => import('../pages/MaterialsPage/MaterialsPage'));
const NotFoundPage = asyncComponent(() => import('../pages/NotFoundPage/NotFoundPage'));
const VocabularyPage = asyncComponent(() => import('../pages/VocabularyPage/VocabularyPage'));
const VocabularyTopicPage = asyncComponent(() => import('../pages/VocabularyTopicPage/VocabularyTopicPage'));
const MusicPage = asyncComponent(() => import('../pages/MusicPage/MusicPage'));
const AudiobooksPage = asyncComponent(() => import('../pages/AudiobooksPage/AudiobooksPage'));
const FilmsPage = asyncComponent(() => import('../pages/FilmsPage/FilmsPage'));
const PodcastsPage = asyncComponent(() => import('../pages/PodcastsPage/PodcastsPage'));
const SeriesPage = asyncComponent(() => import('../pages/SeriesPage/SeriesPage'));

const routes = (props) => {
    return props.isAuthenticated
        ? (
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/levels" exact component={LevelsPage}/>
                <Route path="/materials" exact component={MaterialsPage}/>
                <Route path="/account" exact component={AccountPage}/>

                <Route path="/vocabulary/topics/:id" exact component={VocabularyTopicPage}/>
                <Route path="/vocabulary" component={VocabularyPage}/>

                <Route path="/books" exact component={BooksPage}/>
                <Route path="/books/all" exact component={BooksPage}/>
                <Route path="/books/recommended" exact component={BooksPage}/>
                <Route path="/books/my" exact component={BooksPage}/>
                <Route path="/books/:id" component={BookPage}/>

                <Route path="/articles/all" exact component={ArticlesPage}/>
                <Route path="/articles/recommended" exact component={ArticlesPage}/>
                <Route path="/articles/my" exact component={ArticlesPage}/>
                <Route path="/articles" exact component={ArticlesPage}/>
                <Route path="/articles/:id" exact component={ArticlePage}/>

                <Route path="/music" exact component={MusicPage}/>
                <Route path="/audiobooks" exact component={AudiobooksPage}/>
                <Route path="/podcasts" exact component={PodcastsPage}/>

                <Route path="/films" exact component={FilmsPage}/>
                <Route path="/series" exact component={SeriesPage}/>

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