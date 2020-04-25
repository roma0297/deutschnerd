import React from 'react';
import styles from './AdminConsolePage.module.scss'
import {NavLink} from "react-router-dom";
import FilmCockpit from "./FilmsCockpit/FilmsCockpit";
import SeriesCockpit from "./SeriesCockpit/SeriesCockpit";
import ShowsCockpit from "./ShowsCockpit/ShowsCockpit";
import {Route, Switch} from "react-router";
import ArticlesCockpit from "./ArticlesCockpit/ArticlesCockpit";

const AdminConsolePage = () => (
    <div className={styles.AdminPage}>
        <nav className={styles.AdminPage__navigation}>
            <ul>
                <li><NavLink to="/admin/vocabulary">Слова и фразы</NavLink></li>
                <li><NavLink to="/admin/books">Книги</NavLink></li>
                <li><NavLink to="/admin/articles">Статьи</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/admin/films">Фильмы</NavLink></li>
                <li><NavLink to="/admin/series">Сериалы</NavLink></li>
                <li><NavLink to="/admin/shows">Шоу</NavLink></li>
            </ul>
        </nav>
        <main className={styles.AdminPage__main}>
            <Switch>
                <Route path="/admin/vocabulary" component={FilmCockpit}/>
                <Route path="/admin/books" component={FilmCockpit}/>
                <Route path="/admin/articles" component={ArticlesCockpit}/>

                <Route path="/admin/films" component={FilmCockpit}/>
                <Route path="/admin/series" component={SeriesCockpit}/>
                <Route path="/admin/shows" component={ShowsCockpit}/>
            </Switch>
        </main>
    </div>
);

export default AdminConsolePage;