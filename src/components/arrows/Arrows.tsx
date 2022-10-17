import React from "react";

import classes from './arrows.module.scss';


import next from '../../assets/icon/arrow_next.svg';
import prev from '../../assets/icon/arrow_prev.svg';

type ArrowActive = {
    prevArrow: any;
    nextArrow: any;
}


const Arrows = (props: ArrowActive) => {
    return (
        <>
            <div className={classes.arrow}>
                <div className={classes.arrow__prev} onClick={props.prevArrow} >
                    <img src={prev} alt="prev" />
                </div>
                <div className={classes.arrow__next} onClick={props.nextArrow}>
                    <img src={next} alt="next" />
                </div>
            </div>
        </>

        
    )
}

export {Arrows};