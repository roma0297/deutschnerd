import React from 'react';
import styles from './Modules.module.scss'
import {withRouter} from 'react-router';

const Module = (props) => {

    const handleClick = (link) => {
        props.history.push(link)
    };

    return (
        <div className={styles.Module} onClick={() => handleClick(props.link)}>
            <h3 className={styles.Module__title}>{props.name}</h3>
            <p className={styles.Module__description}>
                Изучаем основы HTML и CSS. На практике разбираемся с
                семантической разметкой и базовыми механизмами
                стилизации на примере небольшого сайта.
            </p>
        </div>
    );
};

export default withRouter(Module);