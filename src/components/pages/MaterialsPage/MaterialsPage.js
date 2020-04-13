import React from 'react'
import styles from './MaterialsPage.module.scss'
import Category from './Category/Cateogry'
import Layout from "../../hoc/Layout/Layout";

const materialsPage = () => (
    <Layout>
        <section className={styles.MaterialsContainer}>
            <div className={styles.MaterialsContainer__inner}>
                <h2 className={styles.ReadingTitle}>Читать</h2>
                <Category className={styles.Vocabulary} title="Слова и фразы" link="/vocabulary"/>
                <Category className={styles.Books} title="Книги" link="/articles"/>
                <Category className={styles.Articles} title="Статьи" link="/articles"/>

                <h2 className={styles.ListeningTitle}>Слушать</h2>
                <Category className={styles.Music} title="Музыка" link="/music" />
                <Category className={styles.Audiobooks} title="Аудиокниги" link="/audiobooks" />
                <Category className={styles.Podcasts} title="Подкасты" link="/podcasts" />

                <h2 className={styles.GamesTitle}>Играть</h2>
                <Category className={styles.Game1} title="Игра 1" link="#" />
                <Category className={styles.Game2} title="Игра 2" link="#" />
                <Category className={styles.Game3} title="Игра 3" link="#" />
                <Category className={styles.Game4} title="Игра 4" link="#" />

                <h2 className={styles.VideoMaterials}>Смотреть</h2>
                <Category className={styles.Films} title="Фильмы" link="/films"/>
                <Category className={styles.Series} title="Сериалы" link="/series"/>
                <Category className={styles.Shows} title="Шоу" link="#"/>
                <Category className={styles.Channels} title="Каналы" link="#"/>
                <Category className={styles.Cartoons} title="Мультфильмы" link="#"/>
            </div>
        </section>
    </Layout>
);

export default materialsPage;