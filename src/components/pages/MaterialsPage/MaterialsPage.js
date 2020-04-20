import React from 'react'
import styles from './MaterialsPage.module.scss'
import Category from './Category/Cateogry'
import Layout from "../../hoc/Layout/Layout";

const materialsPage = () => (
    <Layout>
        <section className={styles.MaterialsContainer}>
            <div className={styles.MaterialsContainer__inner}>
                <h2 className={styles.ReadingTitle}>Читать</h2>
                <Category
                    className={styles.Vocabulary}
                    title="Слова и фразы"
                    link="/vocabulary"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Books}
                    title="Книги"
                    link="/books"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Articles}
                    title="Статьи"
                    link="/articles"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />

                <h2 className={styles.ListeningTitle}>Слушать</h2>
                <Category
                    className={styles.Music}
                    title="Музыка"
                    link="/music"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Audiobooks}
                    title="Аудиокниги"
                    link="/audiobooks"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Podcasts}
                    title="Подкасты"
                    link="/podcasts"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />

                <h2 className={styles.GamesTitle}>Играть</h2>
                <Category
                    className={styles.Game1}
                    title="Игра 1"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Game2}
                    title="Игра 2"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Game3}
                    title="Игра 3"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Game4}
                    title="Игра 4"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />

                <h2 className={styles.VideoMaterials}>Смотреть</h2>
                <Category
                    className={styles.Films}
                    title="Фильмы"
                    link="/films"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Series}
                    title="Сериалы"
                    link="/series"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Shows}
                    title="Шоу"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Channels}
                    title="Каналы"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
                <Category
                    className={styles.Cartoons}
                    title="Мультфильмы"
                    link="#"
                    description="Some very long description. A lot of useless text describing what is going on etc. etc."
                />
            </div>
        </section>
    </Layout>
);

export default materialsPage;