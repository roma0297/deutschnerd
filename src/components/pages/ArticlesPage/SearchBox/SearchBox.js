import React from 'react';
import styles from './SearchBox.module.scss'

const searchBox = () => (
    <div className={styles.SearchBox}>
        <input className={styles.SearchBox__input} type="text" placeholder="What are you looking for?" />
        <button className={styles.SearchBox__button} type="submit">
            Искать
        </button>
    </div>
);

export default searchBox;