import React from 'react';
import styles from './ArticlesPage.module.scss';
import Articles from "./Articles/Articles";
import Layout from '../../hoc/Layout/Layout';
import {NavLink, Route} from 'react-router-dom';
import {Switch} from 'react-router';

const articlesPage = () => (
    <Layout>
        <div className={styles.ArticlesContainer}>
            <aside className={styles.ArticlesContainer__left}>
                <ul>
                    <li><NavLink to="/articles/all">Все статьи</NavLink></li>
                    <li><NavLink to="/articles/recommended">Рекомендуемые</NavLink></li>
                    <li><NavLink to="/articles/my">Избранное</NavLink></li>
                </ul>
            </aside>
            <main>
                <Switch>
                    <Route path="/articles/all" component={Articles}/>
                    <Route path="/articles/recommended" component={Articles}/>
                    <Route path="/articles/my" component={Articles}/>
                </Switch>
            </main>
        </div>
    </Layout>
);

export default articlesPage;