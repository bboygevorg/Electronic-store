import React from "react";
import {Outlet} from 'react-router-dom';
import  {Header, Search}  from "../components";


import classes from '../scss/style.module.scss'


const MainLayout = () => {
    

    return (
        <div className={classes.wrapper}>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <div>2</div>
        </div>
    )
} 

export default MainLayout;

