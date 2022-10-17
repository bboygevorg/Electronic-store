import React from "react";

import { AddCart } from "../..";

import raiting from '../../../assets/icon/raiting.svg'

import classes from './dealItem.module.scss'

type ProductProps = {
    img: any;
    title: string | undefined;
}

const DealItem = (props: ProductProps) => {
    

    return (
        <div className={classes.deal_item}>
            <img className={classes.product} src={props.img} alt="product" />
            <div className={classes.add_hover}>
                <AddCart width="100%" padding='0.75rem 1.5rem' paddingFocus="0.75rem 1.5rem"/>
            </div>
            <div className={classes.info_cart}>
                <h2 className={classes.title}>{props.title}</h2>
                <div className={classes.raiting}>
                    <img src={raiting} alt={raiting} />
                    <span>(160 Reviews)</span>
                </div>
                <div className={classes.price}>
                    <span className={classes.disc_price}>$85.00</span>
                    <span className={classes.direct_price}>$99.00</span>
                </div>
            </div>
        </div>
    )
}

export default DealItem;