import React from 'react'
import NavigationBar from "./NavigationBar/NavigationBar";
import SideDrawer from "./SideDrawer/SideDrawer";

const header = () => (
    <header>
        <SideDrawer/>
        <NavigationBar />
    </header>
);

export default header