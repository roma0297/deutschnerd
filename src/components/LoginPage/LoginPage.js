import React from 'react';
import styles from './LoginPage.module.scss'

const loginPage = () => (
    <section className={styles.LoginSection}>
        <div className={styles.LoginFormContainer}>
            <h2>Create your Deutschnerd Account</h2>
            <p>to start learning</p>

            <form action="/login" method="POST">
                <div className={styles.LoginFormElement}>
                    <label className={styles.LoginFormElement__label}>Name</label>
                    <input className={styles.LoginFormElement__input} id="name" type="text" placeholder="Name"/>
                </div>
                <div className={styles.LoginFormElement}>
                    <label className={styles.LoginFormElement__label}>Email</label>
                    <input className={styles.LoginFormElement__input} id="email" type="email" placeholder="Email"/>
                </div>
                <div className={styles.LoginFormElement}>
                    <label className={styles.LoginFormElement__label}>Password</label>
                    <input className={styles.LoginFormElement__input} id="password" type="password" placeholder="Password"/>
                </div>
                <div className={styles.LoginFormElement}>
                    <label className={styles.LoginFormElement__label}>Confirm</label>
                    <input className={styles.LoginFormElement__input} id="check_password" type="password" placeholder="Confirm"/>
                </div>
                <div className={styles.LoginFormElement}>
                    <button className={styles.LoginFormElement__button} type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    </section>
);

export default loginPage;