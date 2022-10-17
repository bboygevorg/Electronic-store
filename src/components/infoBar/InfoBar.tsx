import React from "react";

import classes from './infoBar.module.scss';

import logo_1 from '../../assets/icon/info_logo1.svg'
import logo_2 from '../../assets/icon/info_logo2.svg'
import logo_3 from '../../assets/icon/info_logo3.svg'
import logo_4 from '../../assets/icon/info_logo4.svg'
import logo_5 from '../../assets/icon/info_logo5.svg'

const InfoBar: React.FC = () => {
    
    const infoBar = [
        {
            id: 1,
            logo: logo_1,
            title: 'Discounts',
            info: 'Great discounts & deals'
        },
        {
            id: 2,
            logo: logo_2,
            title: 'Secure Shopping',
            info: '100% secure payments'
        },
        {
            id: 3,
            logo: logo_3,
            title: 'Rewards',
            info: 'On every purchase'
        },
        {
            id: 4,
            logo: logo_4,
            title: 'Customer Support',
            info: 'Amazing support team'
        },
        {
            id: 5,
            logo: logo_5,
            title: 'Afterpay',
            info: 'Buy Now Pay Later'
        }
    ]


    return (
        <>
            {
                infoBar.map((item, index) => {
                    return (
                        <div className={classes.info} key={index} >
                            <img src={item.logo} alt="" />
                            <div className={classes.info_title}>
                                <h2>{item.title}</h2>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export {InfoBar};