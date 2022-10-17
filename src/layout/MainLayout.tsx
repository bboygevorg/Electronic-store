import React from "react";
import {Outlet} from 'react-router-dom';
import  {Footer, Header}  from "../components";


import classes from '../scss/style.module.scss'


const MainLayout: React.FC = () => {
    

    return (
        <div className={classes.wrapper}>
            <Header />
            <div className={classes.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
} 

export default MainLayout;

