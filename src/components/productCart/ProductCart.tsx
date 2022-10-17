import React from "react";

import classes from './productCart.module.scss'

import raiting from '../../assets/icon/raiting.svg';
import delivery from '../../assets/icon/Delivery.svg';
import { AddCart } from "../../components";

type ProductCart = {
    id: number | undefined;
    img: any;
    text: string | undefined;
}


const ProductCart = (props: ProductCart) => {

    return (
        <div className={classes.productCart}>
            <img className={classes.productCart__img} src={props.img} alt="" />
            <div className={classes.add_hover}>
                <AddCart width='16.7rem' padding='0.5rem 1rem' paddingFocus='0.48rem 0.8rem'/>
            </div>
            <div className={classes.productCart__info}>
                <p className={classes.productCart__info_text}>{props.text}</p>
                <div className={classes.productCart__info_raiting}>
                    <img src={raiting} alt='raiting' />
                    <span>(160 Reviews)</span>
                </div>
                <div className={classes.productCart__info_delivery}>
                    <img src={delivery} alt="delivery" />
                    <span>2-3 days(s)</span>
                </div>
                <div className={classes.productCart__info_price}>
                    <span className={classes.disc_price}>$85.00</span>
                    <span className={classes.direct_price}>$99.00</span>
                </div>
            </div>

        </div>
    )
}

export {ProductCart};