import React from 'react';
import Layout from "../../hoc/Layout/Layout";
import styles from "./SeriesPage.module.scss";
import {NavLink, Route} from "react-router-dom";
import {Switch} from "react-router";
import Series from "./Series/Series";

const SeriesPage = () => (
    <Layout>
        <div className={styles.SeriesContainer}>
            <aside className={styles.SeriesContainer__left}>
                <ul>
                    <li><NavLink to="/series/all">Все сериалы</NavLink></li>
                    <li><NavLink to="/series/recommended">Рекомендуемые</NavLink></li>
                    <li><NavLink to="/series/my">Избранное</NavLink></li>
                </ul>
            </aside>
            <main>
                <Switch>
                    <Route path="/series/all" component={Series}/>
                    <Route path="/series/recommended" component={Series}/>
                    <Route path="/series/my" component={Series}/>
                </Switch>
            </main>
        </div>
    </Layout>
)

export default SeriesPage;