import React, {useState} from 'react';
import styles from './SideDrawer.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import Logout from "../NavigationBar/Logout/Logout";
import Backdrop from "../../../../UI/Backdrop/Backdrop";
import SideDrawerToggle from "./SideDrawerToggle/SideDrawerToggle";


const SideDrawer = (props) => {
    let [isSideDrawerVisible, setSideDrawerVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerVisible(false)
    };

    const sideDrawerToggleClicked = () => {
        setSideDrawerVisible(true)
    };

    if (props.isAuthenticated) {
        return (
            <>
                <Backdrop show={isSideDrawerVisible} clicked={sideDrawerClosedHandler}/>
                <div className={styles.SideDrawer + " " + (isSideDrawerVisible ? styles.Open : styles.Close)}>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Main</NavLink></li>
                            <li><NavLink to="/levels">Levels</NavLink></li>
                            <li><NavLink to="/materials">Materials</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink to="/account" exact>My Account</NavLink></li>
                            <li><NavLink to="/logout" exact>Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <SideDrawerToggle clicked={sideDrawerToggleClicked}/>
            </>
        )
    } else {
        return <Logout/>
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token
    };
};

export default connect(mapStateToProps)(SideDrawer);