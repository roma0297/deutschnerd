import React from 'react';
import styles from './Lesson.module.scss'

const lesson = (props) => (
    <div className={styles.Lesson}>
        <h3 className={styles.Lesson__title}>{props.name}</h3>
        <p className={styles.Lesson__description}>
            Изучаем основы HTML и CSS. На практике разбираемся с
            семантической разметкой и базовыми механизмами
            стилизации на примере небольшого сайта.
        </p>
    </div>
);

export default lesson;