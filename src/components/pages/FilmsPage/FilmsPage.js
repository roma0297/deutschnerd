import React from 'react';
import Layout from '../../hoc/Layout/Layout';
import styles from "../FilmsPage/FilmsPage.module.scss";
import {NavLink, Route} from "react-router-dom";
import {Switch} from "react-router";
import Films from "./Films/Films";

const FilmsPage = () => {
    return (
        <Layout>
            <div className={styles.FilmsContainer}>
                <aside className={styles.FilmsContainer__left}>
                    <ul>
                        <li><NavLink to="/films/all">Все фильмы</NavLink></li>
                        <li><NavLink to="/films/recommended">Рекомендуемые</NavLink></li>
                        <li><NavLink to="/films/my">Избранное</NavLink></li>
                    </ul>
                </aside>
                <main>
                    <Switch>
                        <Route path="/films/all" component={Films}/>
                        <Route path="/films/recommended" component={Films}/>
                        <Route path="/films/my" component={Films}/>
                    </Switch>
                </main>
            </div>
        </Layout>
    );
}

export default FilmsPage;