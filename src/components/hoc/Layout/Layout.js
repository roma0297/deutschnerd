import React from "react";
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

const Layout = (props) => (
    <div className={styles.PageContent}>
        <Header/>
            {props.children}
        <Footer/>
    </div>
);

export default Layout;