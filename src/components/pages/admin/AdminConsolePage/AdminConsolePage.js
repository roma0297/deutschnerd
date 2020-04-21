import React from 'react';
import styles from './AdminConsolePage.module.scss'
import {NavLink} from "react-router-dom";
import FilmCockpit from "./FilmsCockpit/FilmsCockpit";
import SeriesCockpit from "./SeriesCockpit/SeriesCockpit";
import ShowsCockpit from "./ShowsCockpit/ShowsCockpit";
import {Route, Switch} from "react-router";

const AdminConsolePage = () => (
    <div className={styles.AdminPage}>
        <nav className={styles.AdminPage__navigation}>
            <ul>
                <li><NavLink to="/admin/films">Films</NavLink></li>
                <li><NavLink to="/admin/series">Series</NavLink></li>
                <li><NavLink to="/admin/shows">TV Shows</NavLink></li>
            </ul>
        </nav>
        <main className={styles.AdminPage__main}>
            <Switch>
                <Route path="/admin/films" component={FilmCockpit}></Route>
                <Route path="/admin/series" component={SeriesCockpit}></Route>
                <Route path="/admin/shows" component={ShowsCockpit}></Route>
            </Switch>
        </main>
    </div>
);

export default AdminConsolePage;