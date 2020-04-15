import React from 'react';
import styles from './BooksPage.module.scss';
import Books from './Books/Books';
import Layout from '../../hoc/Layout/Layout';
import {NavLink, Route, Switch} from 'react-router-dom';

const booksPage = () => (
    <Layout>
        <div className={styles.BooksContainer}>
            <aside className={styles.BooksContainer__left}>
                <ul>
                    <li><NavLink to="/books/all">Все книги</NavLink></li>
                    <li><NavLink to="/books/recommended">Рекомендуемые</NavLink></li>
                    <li><NavLink to="/books/my">Моя библиотека</NavLink></li>
                </ul>
            </aside>
            <main>
                <Switch>
                    <Route path="/books/all" component={Books}/>
                    <Route path="/books/recommended" component={Books}/>
                    <Route path="/books/my" component={Books}/>
                </Switch>
            </main>
        </div>
    </Layout>
);

export default booksPage;