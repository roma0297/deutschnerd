import React from 'react';
import styles from './VocabularyPage.module.scss';
import Layout from '../../hoc/Layout/Layout';
import {Route, Switch} from 'react-router';
import AllVocabularyTopics from "./AllVocabularyTopics/AllVocabularyTopics";
import {NavLink} from 'react-router-dom';

const vocabularyPage = () => (
    <Layout>
        <div className={styles.VocabularyContainer}>
            <aside className={styles.VocabularyContainer__left}>
                <ul>
                    <li><NavLink to="/vocabulary/all">Все наборы</NavLink></li>
                    <li><NavLink to="/vocabulary/recommended">Рекомендуемые</NavLink></li>
                    <li><NavLink to="/vocabulary/my">Мой словарь</NavLink></li>
                </ul>
            </aside>
            <main>
                <Switch>
                    <Route path="/vocabulary/all" exact component={AllVocabularyTopics}/>
                    <Route path="/vocabulary/recommended" exact component={AllVocabularyTopics}/>
                    <Route path="/vocabulary/my" exact component={AllVocabularyTopics}/>
                </Switch>
            </main>
        </div>
    </Layout>
);

export default vocabularyPage;