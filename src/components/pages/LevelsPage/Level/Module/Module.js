import React from 'react';
import styles from './Modules.module.scss'

const Module = (props) => (
    <div className={styles.Module}>
        <h3 className={styles.Module__title}>{props.name}</h3>
        <p className={styles.Module__description}>
            Изучаем основы HTML и CSS. На практике разбираемся с
            семантической разметкой и базовыми механизмами
            стилизации на примере небольшого сайта.
        </p>
    </div>
);

export default Module;