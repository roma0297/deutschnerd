import React from "react";
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = (props) => (
    <div className="page-content">
        <Header/>
        {props.children}
        <Footer/>
    </div>
);

export default Layout;