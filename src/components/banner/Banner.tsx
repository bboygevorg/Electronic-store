import React from "react";
import { Button } from "../button/Button";

import classes from './banner.module.scss';
import product_8 from '../../assets/img-product/Product-8.png';

const Banner: React.FC = () => {
    return (
        <div className={classes.banner}>
            <div className={classes.banner__info}>
                <h1 className={classes.banner__info_title}>Beats fit pro</h1>
                <p className={classes.banner__info_text}>Twist, Fit, Go.</p>
                <p className={classes.banner__info_price}>$199.99</p>
                <div className={classes.banner__info_button}>
                   <Button button="Add To Cart" padding='0.75rem 1.5rem'/>
                </div>
            </div>
            <div className={classes.banner__img}>
                <img src={product_8} alt="product" />
            </div>
        </div>
    )
}

export {Banner};