import React from "react";
import DealItem from "./dealItem/DealItem";

import classes from './productDealsCart.module.scss'

import product_1 from '../../assets/img-product/Product-1.png'
import product_2 from '../../assets/img-product/Product-2.png'
import product_3 from '../../assets/img-product/Product-3.png'


const ProductDealsCart: React.FC = () => {

    const cartDeals = [
        {
            id: 1,
            img: product_1,
            title: 'AirPods Max',
            
        },
        {
            id: 2,
            img: product_2,
            title: 'Beat Studio Buds',
        },
        {
            id: 3,
            img: product_3,
            title: 'Watch series 7',
        }
    ]

    return (
        <div className={classes.deal_bar}>
            {
                cartDeals.map((item, index) => {
                    return (
                        <DealItem key={index} {...item} />
                    )
                })
            }
        </div>
    )
}

export {ProductDealsCart};