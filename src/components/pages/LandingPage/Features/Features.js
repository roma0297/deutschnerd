import React from 'react';
import Feature from "./Feature/Feature";
import styles from "./Features.module.css"
import image1 from '../../../../assets/images/icons/icon_death-star.v2.svg'
import image2 from '../../../../assets/images/icons/icon_treasure-map.v2.svg'
import image3 from '../../../../assets/images/icons/icon_laboratory.v2.svg'
import image4 from '../../../../assets/images/icons/icon_biceps.v2.svg'
import image5 from '../../../../assets/images/icons/icon_keks-bane.v2.svg'

const features = [
    {
        title: "Подробнейшие курсы по HTML, CSS и JavaScript",
        description: "Мы выбрали одно направление — фронтенд — и сделали самые подробные интерактивные курсы о веб-технологиях. Одну тысячу четыреста заданий в среднем проходят за три месяца.",
        imageReference: image1
    },
    {
        title: "10 глав — бесплатно",
        description: "Сто шестьдесят интерактивных заданий — бесплатные. После их прохождения вы сможете создать свой сайт.",
        imageReference: image2
    },
    {
        title: "Обучение на практике",
        description: "С самого начала мы учим работать с живым кодом и самостоятельно решать задачи, приближённые к реальным. Также вас ждут испытания, принцип которых — «сверстай, как показано в образце».",
        imageReference: image3
    },
    {
        title: "От новичка до профессионала",
        description: "Разобравшись с интерактивными курсами вы сможете принять участие в интенсивах. Это профессиональные программы, где под руководством личного наставника вы научитесь создавать современные сайты и веб-приложения по критериям качества, принятым в веб-индустрии.",
        imageReference: image4
    },
    {
        title: "Учиться весело",
        description: "Интересные, наглядные и затягивающие курсы, интерактивные интерфейсы, достижения — всё для обучения с удовольствием. И конечно же, Инструктор Кекс. Заскучать не получится.",
        imageReference: image5
    }
];


const featuresSection = () => {
    const featureList = features
        .map((feature, index) =>
            <Feature
                key={index}
                {...feature}
                reverse={index % 2 !== 0}
            />
        );

    return (
        <section className={styles.Features}>
            {featureList}
        </section>
    );
};

export default featuresSection;